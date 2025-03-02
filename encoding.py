from PIL import Image
import numpy as np
from pydub import AudioSegment
import wave
import os


def text_to_binary(text_message): 
       return ''.join(format(ord(char), '08b') for char in text_message)


def encode_text_in_image(image_path, message, output_path):
    img = Image.open(image_path)
    img = img.convert("RGB")
    pixels = np.array(img)

    binary_message = text_to_binary(message + "END") # End marker
    message_index = 0

    for row in pixels:
        for pixel in row:
            for i in range(3):  # Iterate over R, G, B values
                if message_index < len(binary_message):
                    pixel[i] = (pixel[i] & 0b11111110) | int(binary_message[message_index])  # Replace LSB
                    message_index += 1

    encoded_img = Image.fromarray(pixels)
    encoded_img.save(output_path)
    print(f"Message hidden in {output_path}")



def decode_text_from_image(image_path):
    img = Image.open(image_path)
    img = img.convert("RGB")
    pixels = np.array(img)
    print(f"Image size: {len(pixels)} pixels")

    binary_message = ""
    
    for row in pixels:
        for pixel in row:
            for i in range(3):
                binary_message += str(pixel[i] & 1)  # Extract LSB

    # Convert binary to text
    binary_chunks = [binary_message[i:i+8] for i in range(0, len(binary_message), 8)]
    message = ''.join(chr(int(byte, 2)) for byte in binary_chunks)

    # Stop at end marker
    if "END" in message:
        message = message[:message.index("END")]
    return message




def convert_and_optimize_audio(input_audio_path, output_audio_path):
    # Load the audio file
    audio = AudioSegment.from_file(input_audio_path)
    
    # Convert to mono (1 channel), reduce sample rate, and lower bit depth
    audio = audio.set_channels(1)  # Mono audio
    audio = audio.set_frame_rate(22050)  # Reduce sample rate to 22kHz
    audio = audio.set_sample_width(1)  # Reduce bit depth to 8 bits
    
    # Export the optimized audio to a new file
    audio.export(output_audio_path, format="wav")
    print(f"Converted and optimized {input_audio_path} to {output_audio_path}")
    return output_audio_path


def encode_audio_in_image(image_path, audio_path, output_image):
    #Audio Compression
    audio_path = convert_and_optimize_audio(audio_path, "newAudio.wav")
    
    # Read audio file
    with wave.open(audio_path, 'rb') as audio:
        frames = audio.readframes(audio.getnframes())  # Get raw audio data
    
    audio_size = os.path.getsize(audio_path)
    print(f"Audio file size (bytes): {audio_size}")

    # Convert audio data to binary
    binary_audio = ''.join(format(byte, '08b') for byte in frames)
    binary_audio += '1111111111111110'  # End delimiter

    # Open the image
    img = Image.open(image_path)
    pixels = list(img.getdata())

    # Encode audio into image pixels
    encoded_pixels = []
    binary_index = 0
    for pixel in pixels:
        new_pixel = list(pixel)
        for i in range(3):  # Modify R, G, or B
            if binary_index < len(binary_audio):
                new_pixel[i] = (new_pixel[i] & 0b11111110) | int(binary_audio[binary_index])
                binary_index += 1
        encoded_pixels.append(tuple(new_pixel))

    # Save modified image
    encoded_img = Image.new(img.mode, img.size)
    encoded_img.putdata(encoded_pixels)
    encoded_img.save(output_image)
    print("Audio encoded into image:", output_image)


def decode_audio_from_image(image_path, output_audio):
    # Open the image
    img = Image.open(image_path)
    img = img.convert("RGB")
    pixels = np.array(img)
    height, width = pixels.shape[:2]
    print(f"Image size: {height}x{width} pixels")

    delimiter = '1111111111111110'
    # Extract LSBs to reconstruct binary audio
    binary_audio = ''
    for y in range(height):
        for x in range(width):
            pixel = pixels[y, x]
            for i in range(3):
                binary_audio += str(pixel[i] & 1)
                if len(binary_audio) % 100 == 0 and delimiter in binary_audio:
                    binary_audio = binary_audio.split(delimiter)[0]
                    print("DONE HERE")
                    break
            else:
                continue
            break
        else:
            continue
        break

    # Find delimiter and extract actual audio data
    binary_audio = binary_audio.split('1111111111111110')[0]  # Stop at delimiter
    
    if len(binary_audio) % 8 != 0:
        print(f"Warning: Audio data seems incomplete or corrupted.")
        binary_audio = binary_audio + '0' * (8 - len(binary_audio) % 8)

    audio_bytes = bytearray(int(binary_audio[i:i+8], 2) for i in range(0, len(binary_audio), 8))

    
    # Save audio file
    with wave.open(output_audio, 'wb') as audio:
        audio.setnchannels(1)
        audio.setsampwidth(1)
        audio.setframerate(22050)
        audio.writeframes(audio_bytes)

    print("Audio extracted and saved as:", output_audio)



# # print(text_to_binary("HI"))
#encode_text_in_image(input("Source Image:"), input("Message: "), input("New Image Locaiton:"))
#print(decode_text_from_image("new_dog.png"))
#encode_audio_in_image("dog.png", "threat.m4a", "threatimage.png")
#decode_audio_from_image("threatimage.png", "recovered.wav")
#convert_to_wav("merchant.m4a", "merchant.wav")
#convert_and_optimize_audio("threat.m4a", "optimized.wav")


# def text_encode(): 
#     text = input("What is the message you wish to encode?")
#     inputPath = input("Provide the file path for the image you wish to encode")
#     outputPath = input("Where should we save the output image?")
#     encode_text_in_image(inputPath, text, outputPath)

# text_encode()

choice = input("Do you wish to encode or decode? Select 1 for encode or 2 for decode: ")
if choice == "1":
    audioOrText = input("Are we encoding an audio file or a text mesasge? Press 1 for audio or 2 for text: ")
    if audioOrText == "1": 
        audio = input("Provide file path for the audio you wish to encode: ")
        inputPath = input("Provide the file path for the image you wish to encode: ")
        outputPath = input("Where should we save the output image? ")
        encode_audio_in_image(inputPath, audio, outputPath)
    elif audioOrText =="2":
        text = input("Provide the message you want to encode" )
        inputPath = input("Provide the file path for the image you wish to encode ")
        outputPath = input("Where should we save the output image? ")
        encode_text_in_image(inputPath, text, outputPath)   
elif choice == "2": 
    audioOrText = input("Are we decoding to recover a message or an audio file? Press 1 for Audio or 2 for text ")
    if audioOrText == "1": 
        image = input("Provide the file path for the image you wish to decode ")
        outputLoc = input("Where should we save the recovered output audio file? ")
        decode_audio_from_image(image, outputLoc)
    elif audioOrText == "2": 
        image = input("Provide the file path for the image you wish to decode ")
        print(decode_text_from_image(image))

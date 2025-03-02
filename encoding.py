from PIL import Image
import numpy as np

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


# print(text_to_binary("HI"))
encode_text_in_image("dog.png", "I am safe", "message.png")
print(decode_text_from_image("message.png"))


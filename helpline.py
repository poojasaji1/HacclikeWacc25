from google import genai
import os


def makeRequest(user_input):
    key = os.getenv("GENAI_API_KEY")
    #print(key)
    client = genai.Client(api_key = key)
    contents = generatePrompt(user_input)
    try:
        response = client.models.generate_content(
            model="gemini-1.5-flash",  
            contents=contents
        )
        if response.candidates and len(response.candidates) > 0:
            candidate = response.candidates[0]  # Get the first candidate (assuming there's one)
            if candidate.content and candidate.content.parts:
                text = candidate.content.parts[0].text  # Access the text from the first part
                print(text)
            else:
                print("Content parts are missing or empty.")
        else:
            print("No candidates found in the response.")

        
    except Exception as e:
        print(f"An error occurred: {e}")




def generatePrompt(user_input): 
    context = """
    You are an AI assistant designed to help victims of domestic violence find a safe escape plan. A victim of domestic violence is contacting you for help. 
    Help provide reasurance, steps to take for safety, and provide resources such as shelters nearby, hotlines, or legal services. Help them create an escape plan if they want. 
    """
    prompt = context + "Here is the user's situation: " + user_input
    return prompt


#makeRequest("My husband has become very abusive and controlling. He does not let me talk to anyone or even step outside of the house. I want to leave, but I am a SAHM, so I have no money or job, and I can't loose my kids")
#makeRequest("My husband hit me for the first time today. I love him, I dont want to leave. I dont have any money or identity without him. No where to go, no friends...")

#print(os.environ)

request = input("We are here to help, what's your situation?")
makeRequest(request)
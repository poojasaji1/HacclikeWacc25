from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all routes

# Add a simple GET route for testing
@app.route('/', methods=['GET'])
def home():
    return jsonify({'status': 'Flask server is running hii'}) 

@app.route('/api/process', methods=['POST'])
def process_text():
    print("Received request to /api/process")
    try:
        data = request.json
        input_text = data.get('text', '')
        
        # Add three exclamation marks
        processed_text = input_text + '!!!'
        
        print(f"Processing: {input_text} -> {processed_text}")
        return jsonify({'result': processed_text})
    except Exception as e:
        print(f"Error: {str(e)}")
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    print("Starting Flask server on http://localhost:5001")
    app.run(debug=True, host='0.0.0.0', port=5001) 
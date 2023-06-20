import json

input_path = "../import/tokens.json"
output_path = "./color/feefo.json"

with open(input_path) as file:
    data = json.load(file)

color_tokens = {}
for token_name, token_data in data["global-feefo"].items():
    if "type" in token_data and token_data["type"] == "color":
        color_tokens[token_name] = {"value": token_data["value"]}

output_data = json.dumps(color_tokens, indent=2)

with open(output_path, "w") as file:
    file.write(output_data)

print("Color tokens exported successfully.")

import os
import re
import json

def clean_text(text):
    # Remove import statements
    lines = text.split('\n')
    lines = [l for l in lines if not l.strip().startswith('import ')]
    text = '\n'.join(lines)
    
    # Remove JSX comments
    text = re.sub(r'\{\s*/\*.*?\*/\s*\}', ' ', text, flags=re.DOTALL)
    
    # Remove HTML/JSX tags
    text = re.sub(r'<[^>]+>', ' ', text)
    
    # Remove export and function boilerplate
    text = re.sub(r'export default function\s+\w+\(\)\s*\{', ' ', text)
    text = re.sub(r'return\s*\(', ' ', text)
    
    # Remove JS expressions like className={"..."} which might have been left over
    # Actually, <[^>]+> removes className completely.
    
    # Remove code syntax symbols
    text = re.sub(r'[;(){}\[\]]', ' ', text)
    
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text)
    return text.strip()

def generate_index():
    app_dir = os.path.join(os.getcwd(), 'app')
    index_data = []

    for root, dirs, files in os.walk(app_dir):
        for file in files:
            if file == 'page.tsx':
                filepath = os.path.join(root, file)
                
                # Determine route from path
                rel_path = os.path.relpath(root, app_dir)
                route = '/' if rel_path == '.' else '/' + rel_path.replace('\\', '/')
                
                # Generate a title from the route
                title = 'Home' if route == '/' else route.strip('/').replace('-', ' ').title()

                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()

                cleaned_content = clean_text(content)

                if cleaned_content:
                    index_data.append({
                        "route": route,
                        "title": title,
                        "content": cleaned_content
                    })

    # Ensure lib directory exists
    lib_dir = os.path.join(os.getcwd(), 'lib')
    os.makedirs(lib_dir, exist_ok=True)

    # Write to lib/searchIndex.ts
    out_file = os.path.join(lib_dir, 'searchIndex.ts')
    with open(out_file, 'w', encoding='utf-8') as f:
        f.write("// AUTO-GENERATED FILE. Run `python generate_search_index.py` to update.\n\n")
        f.write("export const searchIndex = ")
        f.write(json.dumps(index_data, indent=2))
        f.write(";\n")
        
    print(f"Generated searchIndex.ts with {len(index_data)} pages indexed.")

if __name__ == '__main__':
    generate_index()

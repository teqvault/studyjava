import os
import re

# Get the directory of the script and set target folders
script_dir = os.path.dirname(os.path.abspath(__file__))

# Smart routing to find pages and css folders
if os.path.basename(script_dir) == 'scripts':
    pages_dir = os.path.abspath(os.path.join(script_dir, '../pages'))
    css_dir = os.path.abspath(os.path.join(script_dir, '../css'))
else:
    pages_dir = os.path.abspath(os.path.join(script_dir, 'pages'))
    css_dir = os.path.abspath(os.path.join(script_dir, 'css'))

# Ensure the CSS directory exists
os.makedirs(css_dir, exist_ok=True)

# Regex to find the style block
style_pattern = re.compile(r'<style>(.*?)</style>', re.DOTALL)

print("--- EXTRACTING CSS ---")

found_files = False
for filename in os.listdir(pages_dir):
    if filename.endswith('.html'):
        filepath = os.path.join(pages_dir, filename)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        match = style_pattern.search(content)
        if match:
            found_files = True
            # Get the CSS text
            css_content = match.group(1).strip()
            
            # Create the new CSS filename (e.g., java-pre-course.css)
            css_filename = filename.replace('.html', '.css')
            css_filepath = os.path.join(css_dir, css_filename)
            
            # Save the CSS file
            with open(css_filepath, 'w', encoding='utf-8') as css_file:
                css_file.write(css_content)
            
            # Remove the inline styles and inject the new link
            stylesheet_link = f'    <link rel="stylesheet" href="../css/{css_filename}">\n'
            new_content = style_pattern.sub('', content)
            
            # Only add the link if it's not already there
            if f'href="../css/{css_filename}"' not in new_content:
                new_content = new_content.replace('</head>', f'{stylesheet_link}</head>')
            
            # Save the updated HTML file
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(new_content)
                
            print(f"✅ Extracted: {filename} -> css/{css_filename}")

if not found_files:
    print("No inline <style> blocks found to extract.")
else:
    print("\nAll HTML files are now clean, and styles are safely separated in the css/ folder!")
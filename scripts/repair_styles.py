import os
import re

# Smart routing to find the pages and css directories automatically
script_dir = os.path.dirname(os.path.abspath(__file__))

if os.path.basename(script_dir) == 'scripts':
    pages_dir = os.path.abspath(os.path.join(script_dir, '../pages'))
    css_dir = os.path.abspath(os.path.join(script_dir, '../css'))
else:
    pages_dir = os.path.abspath(os.path.join(script_dir, 'pages'))
    css_dir = os.path.abspath(os.path.join(script_dir, 'css'))

# Regex to find ALL existing stylesheet links (broken or not) so we can clear them out safely
all_links_pattern = re.compile(r'\s*<link[^>]*rel="stylesheet"[^>]*>\n*', re.IGNORECASE)
# Regex to find </head> for safe injection
head_pattern = re.compile(r'</head>', re.IGNORECASE)

print(f"--- REPAIRING HTML STYLES IN: {pages_dir} ---")

updated_count = 0

if not os.path.exists(pages_dir):
    print(f"❌ ERROR: Pages folder not found at {pages_dir}")
else:
    for filename in os.listdir(pages_dir):
        if filename.endswith('.html'):
            filepath = os.path.join(pages_dir, filename)
            
            with open(filepath, 'r', encoding='utf-8') as file:
                content = file.read()
            
            # 1. Strip all existing stylesheet links to remove broken duplicates
            new_content = re.sub(all_links_pattern, '\n', content)
            
            # 2. Build the correct stylesheet links
            # Always link the master stylesheet first
            new_links = '    <link rel="stylesheet" href="../css/style.css">\n'
            
            # Smart check: Does this specific HTML file have its own CSS file in the /css folder?
            specific_css_filename = filename.replace('.html', '.css')
            if os.path.exists(os.path.join(css_dir, specific_css_filename)):
                new_links += f'    <link rel="stylesheet" href="../css/{specific_css_filename}">\n'
            
            # 3. Inject the clean links safely right before </head>
            new_content = head_pattern.sub(f'{new_links}</head>', new_content)
            
            # 4. Save the repaired file
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(new_content)
            
            print(f"✅ Repaired: {filename} (Linked master" + 
                  (f" & {specific_css_filename})" if specific_css_filename in new_links else ")"))
            updated_count += 1

print(f"\nDone! Successfully restored and fixed the CSS links in {updated_count} HTML files.")
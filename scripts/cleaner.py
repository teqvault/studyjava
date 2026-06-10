import os
import re

script_dir = os.path.dirname(os.path.abspath(__file__))

# Route to pages directory
if os.path.basename(script_dir) == 'scripts':
    pages_dir = os.path.abspath(os.path.join(script_dir, '../pages'))
else:
    pages_dir = os.path.abspath(os.path.join(script_dir, 'pages'))

print(f"--- FIXING RAW HTML ENTITIES IN: {pages_dir} ---")

updated_count = 0

for filename in os.listdir(pages_dir):
    if filename.endswith('.html'):
        filepath = os.path.join(pages_dir, filename)
        
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
            
        original_content = content
        
        # 1. Fix Lambda Arrows: match '->' but ignore HTML comments '-->'
        # The negative lookbehind (?<!-) ensures we don't break content = re.sub(r'(?<!-)->', '-&gt;', content)
        
        # 2. Fix spaced greater-than/less-than signs (e.g., ' > ', ' < ', ' >= ')
        # This catches mathematical operators in standard text without touching HTML tags
        content = re.sub(r' > ', ' &gt; ', content)
        content = re.sub(r' < ', ' &lt; ', content)
        content = re.sub(r' >= ', ' &gt;= ', content)
        content = re.sub(r' <= ', ' &lt;= ', content)
        
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(content)
            print(f"✅ Encoded raw characters in: {filename}")
            updated_count += 1

print(f"\nDone! Fixed validation errors in {updated_count} files.")
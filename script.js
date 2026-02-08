const rules = [
  {
    regex: /^#{3}\s(.+)/gm,
    html: '<h3>$1</h3>'
  },
  {
    regex: /^#{2}\s(.+)/gm,
    html: '<h2>$1</h2>'
  },
  {
    regex: /^#{1}\s(.+)/gm,
    html: '<h1>$1</h1>'
  },
  {
    regex: /(\*\*|__)(.+)(\*\*|__)/gm,
    html: '<strong>$2</strong>'
  },
  {
    regex: /(\*|_)(.+)(\*|_)/gm,
    html: '<em>$2</em>'
  },
  {
    regex: /^!\[(.+)\]\((.+)\)/gm,
    html: '<img alt="$1" src="$2">'
  },
  {
    regex: /\[(.+)\]\((.+)\)/gm,
    html: '<a href="$2">$1</a>'
  },
  {
    regex: /^>\s(.+)/gm,
    html: '<blockquote>$1</blockquote>'
  }
];

function convertMarkdown() {
  let result = document.getElementById('markdown-input').value;
  
  for (let rule of rules) {
    result = result.replace(rule.regex, rule.html);
  }
  return result
};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('markdown-input').addEventListener('input', () => {
    let html = convertMarkdown();
    
    document.getElementById('preview').innerHTML = html;
    document.getElementById('html-output').textContent = html;
  });
});


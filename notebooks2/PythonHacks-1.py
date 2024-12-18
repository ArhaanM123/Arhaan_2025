from emoji import emojize 
from newspaper import Article
import wikipedia 
from IPython.display import display, Markdown # add for Jupyter
import inspect 
from newspaper import Article
import os

# Define the directory where notebooks will be saved
notebook_dir = 'notebooks'

# Ensure the directory exists
os.makedirs(notebook_dir, exist_ok=True)

# Example of generating a file path
notebook_path = os.path.join(notebook_dir, 'my_notebook.ipynb')

# Save the notebook (this is just an example, you would typically use nbformat or other tools to generate the notebook)
with open(notebook_path, 'w') as f:
    f.write("# Jupyter Notebook Content")


print(emojize(":winking_face: Python is funny! :kissing_face:"))


urls = ["http://cnn.com/2023/03/29/entertainment/the-mandalorian-episode-5-recap/index.html", 
        "https://www.cnn.com/2023/06/09/entertainment/jurassic-park-anniversary/index.html"]

for url in urls:

    article = Article(url)
    article.download()
    article.parse()
    # Jupyter Notebook Display
    # print(article.title)
    display(Markdown(article.title)) # Jupyter display only
    display(Markdown(article.text)) # Jupyter display only
    display(Markdown(article.title)) # Jupyter display only
    print("\n")

terms = ["Python (programming language)", "JavaScript"]
for term in terms:
    # Search for a page 
    result = wikipedia.search(term)
    # Get the summary of the first result
    summary = wikipedia.summary(result[0])
    print(term) 
    # print(summary) # console display
    display(Markdown(summary)) # Jupyter display


    # inspect newspaper Article function
 #   print(inspect.getsource(Article))
    
from emoji import emojize 
from newspaper import Article
import wikipedia 
from IPython.display import display, Markdown  # for Jupyter
import inspect 

# Add file for saving output
output_file = "output_log.txt"

# Writing output to a file
with open(output_file, 'w') as f:

    # Emoji output
    f.write(emojize(":winking_face: Python is funny! :kissing_face:") + "\n")
    print(emojize(":winking_face: Python is funny! :kissing_face:"))

    # URLs for articles
    urls = [
        "http://cnn.com/2023/03/29/entertainment/the-mandalorian-episode-5-recap/index.html", 
        "https://www.cnn.com/2023/06/09/entertainment/jurassic-park-anniversary/index.html"
    ]

    # Process articles from URLs
    for url in urls:
        article = Article(url)
        article.download()
        article.parse()

        # Save article title and text to file
        f.write(f"\nArticle: {article.title}\n")
        f.write(f"{article.text}\n\n")

        # Display in Jupyter
        display(Markdown(f"# {article.title}"))
        display(Markdown(article.text))
    
    # Wikipedia terms
    terms = ["Python (programming language)", "JavaScript"]
    for term in terms:
        # Search for a page 
        result = wikipedia.search(term)
        # Get the summary of the first result
        summary = wikipedia.summary(result[0])
        
        # Save summary to file
        f.write(f"\nWikipedia Search: {term}\n")
        f.write(f"{summary}\n\n")
        
        # Display in Jupyter
        display(Markdown(f"## {term}"))
        display(Markdown(summary))

    # Inspect the Article function
    f.write("\nInspecting Article function:\n")
    f.write(inspect.getsource(Article))
    print(inspect.getsource(Article))

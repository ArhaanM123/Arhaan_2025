```python
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

```

    😉 Python is funny! 😗



# ‘The Mandalorian’ finally comes into focus, while giving out a ‘Rebels’ yell



Editor’s Note: The following contains spoilers about the fifth episode of “The Mandalorian,” Season 3, “The Pirate.”

CNN —

After what can at best be described as a somewhat disjointed third season thus far, the fifth episode of “The Mandalorian” began to bring those pieces together and into focus, while continuing to draw upon the “Star Wars” animated series that preceded it, including another cameo by a character from the rightfully lauded “Rebels.”

Subtitled “The Pirate,” the episode presented further evidence of the dysfunctional nature of the New Republic, unable or unwilling to defend a faraway planet from an invading band of pirates. (Lucasfilm being a unit of Disney, the marauders had a certain “Yo ho, yo ho” vibe to them.)

The siege also played into Mandalorian politics, and the efforts of Bo-Katan (Katee Sackhoff) to reclaim her heritage and potentially reunite her people’s various tribes, after leading them, along with Din Djarin (voiced by Pedro Pascal), to the rescue of his pal Greef Karga (Carl Weathers) and the planet’s residents.

Still, the most pleasing moment for longtime “Star Wars” fans was likely what amounted to a throwaway scene, introducing a live-action version of the hulking alien Zeb, a character from the animated “Star Wars Rebels,” which concluded in 2018. “The Mandalorian” has drawn heavily from those properties, which were overseen by one of its executive producers, Dave Filoni. (In another nice touch, Steve Blum again provided the voice of the character, and Zeb looked a whole lot better than the pirate leader.)

Finally, the episode closed with evidence that the evil Moff Gideon (played by Giancarlo Esposito previously) had seemingly been freed from the prison ship that was transporting him to stand trial, reviving that potential threat.

Having resolved the fate of Grogu, a.k.a. Baby Yoda, during the first two seasons, “The Mandalorian” has thus moved on to fill in narrative gaps about an under-explored chapter in “Star Wars” history – namely, the factors that resulted in the fall of the New Republic and the rise of the First Order, the plot line featured in the most recent trilogy that began with “The Force Awakens.”

“This isn’t a rebellion anymore,” a bureaucrat (played by Tim Meadows) says about what happens outside of the New Republic’s jurisdiction, conveying an indifference to the fate of the planet Nevarro overtly articulated later when it was observed that the governing body in Coruscant “doesn’t care.”

Executive producers Jon Favreau and Filoni have taken their time in reaching this point, juggling these various issues in somewhat ungainly fashion through the first half of the season. That perhaps reflects the transition of the show to an emphasis on the macro instead of the micro, while still finding time to detour for the occasional “Rebels” yell.



# ‘Jurassic Park’ still has bite at 30 years old, and here’s why



CNN —

It’s been 30 years since Steven Spielberg’s dinosaurs stampeded across the screen in the first “Jurassic Park,” but it feels more recent.

I was 12 in June of 1993 and vividly remember watching with glee when the Tyrannosaurus Rex, with its teeny arms and perpetual scowl, blew the walls of the bathroom down like a big bad wolf and promptly ate the lawyer character (played to hilarious effect by Martin Ferrero). Part of this, surely, had to do with the fact that I was a mouthy pre-teen, and many adults in my sphere at the time opined that I “would make a great lawyer” just like my father – a fate I abhorred.

Admittedly, I was the exact target audience for this creature feature, and even though I was already somewhat of a self-taught critic (note the aforementioned mouthiness), I was awed by what I saw that summer three decades ago, and my impressions of “Jurassic Park” remain to this day.

Joseph Mazzello in "Jurassic Park." Amblin/Universal/Kobal/Shutterstock

Part of that lasting impact, of course, has to do with the still-groundbreaking effects in the movie, which surprisingly hold up, and on a fairly hi-tech 72-inch TV screen to boot. While the first dino money shot – of the plant-eating brachiosaurus – might look just a tad soupy in 2023, it still looks considerably better than more contemporary fare, and the ensuing imagery of the more predatory beasts (like T-rex and especially those raptors) remains top-notch. The computer-generated imagery in the movie is essentially credited with marking the end of stop-motion animation as the go-to effects option for films such as these, notably used in everything that came before, from 1933’s “King Kong” to 1981’s “Clash of the Titans.” The animatronics are something to behold as well, particularly the ailing triceratops responsible for that “one big pile of s—,” one of many priceless quips uttered by Ian Malcolm (Jeff Goldblum).

The appeal of “Jurassic,” based on Michael Crichton’s acclaimed novel, is also largely due to the film’s suspenseful and pared-down pacing, which of course can be linked to Spielberg, who learned a thing or two about keeping his cards close to his chest with “Jaws” – the great white mother of all creature features that famously showed startlingly little of the big fish before the climax.

Another “Jaws” connection is prolific film composer John Williams, the Spielberg collaborator who created a majestic score for “Jurassic Park” that is still synonymous with an air of discovery, one that can easily be hummed when looking upon any great view or upon entering a new and uncharted space.

Laura Dern, Sam Neill and Joseph Mazzello in "Jurassic Park." Amblin/Universal/Kobal/Shutterstock

And then there’s the casting, an element that sometimes takes a number of years to truly appreciate. Aside from the always-dependable Goldblum, there’s Laura Dern, who carved out her own Sigourney Weaver-shaped notch in the movie thanks to that one terrifying sequence in the control shed. Plus, her reaction shot to that first dinosaur reveal – along with that of Sam Neill – could be viewed as a textbook for green-screen acting, which has become the standard ever since, in Marvel movies and beyond. Add to that the amazing and meme-worthy smaller performances from Samuel L. Jackson (“Hold onto your butts!”), Wayne Knight (“Ah ah ah! You didn’t say the magic word!”) and Bob Peck (“Clever girl”), and you’ve got a crowd-pleaser that is equal parts adventure, comedy and chomp-chomp thriller.

While the rest of the entries in the “Jurassic” franchise have not exactly been up to par (aside from 2015’s not-terrible first reboot “Jurassic World”), the original flick still “rules” – and is definitely worth a rewatch on the occasion of its 30th birthday.



## Python (programming language)



Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.
Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.
Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward-compatible with earlier versions. Python 2.7.18, released in 2020, was the last release of Python 2.
Python consistently ranks as one of the most popular programming languages, and has gained widespread use in the machine learning community.



## JavaScript



JavaScript (), often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior.
Web browsers have a dedicated JavaScript engine that executes the client code. These engines are also utilized in some servers and a variety of apps. The most popular runtime system for non-browser usage is Node.js.
JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).
The ECMAScript standard does not include any input/output (I/O), such as networking, storage, or graphics facilities. In practice, the web browser or other runtime system provides JavaScript APIs for I/O.
Although Java and JavaScript are similar in name, syntax, and respective standard libraries, the two languages are distinct and differ greatly in design.




    class Article(object):
        """Article objects abstract an online news article page
        """
        def __init__(self, url, title='', source_url='', config=None, **kwargs):
            """The **kwargs argument may be filled with config values, which
            is added into the config object
            """
            if isinstance(title, Configuration) or \
                    isinstance(source_url, Configuration):
                raise ArticleException(
                    'Configuration object being passed incorrectly as title or '
                    'source_url! Please verify `Article`s __init__() fn.')
    
            self.config = config or Configuration()
            self.config = extend_config(self.config, kwargs)
    
            self.extractor = ContentExtractor(self.config)
    
            if source_url == '':
                scheme = urls.get_scheme(url)
                if scheme is None:
                    scheme = 'http'
                source_url = scheme + '://' + urls.get_domain(url)
    
            if source_url is None or source_url == '':
                raise ArticleException('input url bad format')
    
            # URL to the main page of the news source which owns this article
            self.source_url = source_url
    
            self.url = urls.prepare_url(url, self.source_url)
    
            self.title = title
    
            # URL of the "best image" to represent this article
            self.top_img = self.top_image = ''
    
            # stores image provided by metadata
            self.meta_img = ''
    
            # All image urls in this article
            self.imgs = self.images = []
    
            # All videos in this article: youtube, vimeo, etc
            self.movies = []
    
            # Body text from this article
            self.text = ''
    
            # `keywords` are extracted via nlp() from the body text
            self.keywords = []
    
            # `meta_keywords` are extracted via parse() from <meta> tags
            self.meta_keywords = []
    
            # `tags` are also extracted via parse() from <meta> tags
            self.tags = set()
    
            # List of authors who have published the article, via parse()
            self.authors = []
    
            self.publish_date = ''
    
            # Summary generated from the article's body txt
            self.summary = ''
    
            # This article's unchanged and raw HTML
            self.html = ''
    
            # The HTML of this article's main node (most important part)
            self.article_html = ''
    
            # Keep state for downloads and parsing
            self.is_parsed = False
            self.download_state = ArticleDownloadState.NOT_STARTED
            self.download_exception_msg = None
    
            # Meta description field in the HTML source
            self.meta_description = ""
    
            # Meta language field in HTML source
            self.meta_lang = ""
    
            # Meta favicon field in HTML source
            self.meta_favicon = ""
    
            # Meta tags contain a lot of structured data, e.g. OpenGraph
            self.meta_data = {}
    
            # The canonical link of this article if found in the meta data
            self.canonical_link = ""
    
            # Holds the top element of the DOM that we determine is a candidate
            # for the main body of the article
            self.top_node = None
    
            # A deepcopied clone of the above object before heavy parsing
            # operations, useful for users to query data in the
            # "most important part of the page"
            self.clean_top_node = None
    
            # lxml DOM object generated from HTML
            self.doc = None
    
            # A deepcopied clone of the above object before undergoing heavy
            # cleaning operations, serves as an API if users need to query the DOM
            self.clean_doc = None
    
            # A property dict for users to store custom data.
            self.additional_data = {}
    
        def build(self):
            """Build a lone article from a URL independent of the source (newspaper).
            Don't normally call this method b/c it's good to multithread articles
            on a source (newspaper) level.
            """
            self.download()
            self.parse()
            self.nlp()
    
        def download(self, input_html=None, title=None, recursion_counter=0):
            """Downloads the link's HTML content, don't use if you are batch async
            downloading articles
    
            recursion_counter (currently 1) stops refreshes that are potentially
            infinite
            """
            if input_html is None:
                try:
                    html = network.get_html_2XX_only(self.url, self.config)
                except requests.exceptions.RequestException as e:
                    self.download_state = ArticleDownloadState.FAILED_RESPONSE
                    self.download_exception_msg = str(e)
                    log.debug('Download failed on URL %s because of %s' %
                              (self.url, self.download_exception_msg))
                    return
            else:
                html = input_html
    
            if self.config.follow_meta_refresh:
                meta_refresh_url = extract_meta_refresh(html)
                if meta_refresh_url and recursion_counter < 1:
                    return self.download(
                        input_html=network.get_html(meta_refresh_url),
                        recursion_counter=recursion_counter + 1)
    
            self.set_html(html)
            self.set_title(title)
    
        def parse(self):
            self.throw_if_not_downloaded_verbose()
    
            self.doc = self.config.get_parser().fromstring(self.html)
            self.clean_doc = copy.deepcopy(self.doc)
    
            if self.doc is None:
                # `parse` call failed, return nothing
                return
    
            # TODO: Fix this, sync in our fix_url() method
            parse_candidate = self.get_parse_candidate()
            self.link_hash = parse_candidate.link_hash  # MD5
    
            document_cleaner = DocumentCleaner(self.config)
            output_formatter = OutputFormatter(self.config)
    
            title = self.extractor.get_title(self.clean_doc)
            self.set_title(title)
    
            authors = self.extractor.get_authors(self.clean_doc)
            self.set_authors(authors)
    
            meta_lang = self.extractor.get_meta_lang(self.clean_doc)
            self.set_meta_language(meta_lang)
    
            if self.config.use_meta_language:
                self.extractor.update_language(self.meta_lang)
                output_formatter.update_language(self.meta_lang)
    
            meta_favicon = self.extractor.get_favicon(self.clean_doc)
            self.set_meta_favicon(meta_favicon)
    
            meta_description = \
                self.extractor.get_meta_description(self.clean_doc)
            self.set_meta_description(meta_description)
    
            canonical_link = self.extractor.get_canonical_link(
                self.url, self.clean_doc)
            self.set_canonical_link(canonical_link)
    
            tags = self.extractor.extract_tags(self.clean_doc)
            self.set_tags(tags)
    
            meta_keywords = self.extractor.get_meta_keywords(
                self.clean_doc)
            self.set_meta_keywords(meta_keywords)
    
            meta_data = self.extractor.get_meta_data(self.clean_doc)
            self.set_meta_data(meta_data)
    
            self.publish_date = self.extractor.get_publishing_date(
                self.url,
                self.clean_doc)
    
            # Before any computations on the body, clean DOM object
            self.doc = document_cleaner.clean(self.doc)
    
            self.top_node = self.extractor.calculate_best_node(self.doc)
            if self.top_node is not None:
                video_extractor = VideoExtractor(self.config, self.top_node)
                self.set_movies(video_extractor.get_videos())
    
                self.top_node = self.extractor.post_cleanup(self.top_node)
                self.clean_top_node = copy.deepcopy(self.top_node)
    
                text, article_html = output_formatter.get_formatted(
                    self.top_node)
                self.set_article_html(article_html)
                self.set_text(text)
    
            self.fetch_images()
    
            self.is_parsed = True
            self.release_resources()
    
        def fetch_images(self):
            if self.clean_doc is not None:
                meta_img_url = self.extractor.get_meta_img_url(
                    self.url, self.clean_doc)
                self.set_meta_img(meta_img_url)
    
                imgs = self.extractor.get_img_urls(self.url, self.clean_doc)
                if self.meta_img:
                    imgs.add(self.meta_img)
                self.set_imgs(imgs)
    
            if self.clean_top_node is not None and not self.has_top_image():
                first_img = self.extractor.get_first_img_url(
                    self.url, self.clean_top_node)
                if self.config.fetch_images:
                    self.set_top_img(first_img)
                else:
                    self.set_top_img_no_check(first_img)
    
            if not self.has_top_image() and self.config.fetch_images:
                self.set_reddit_top_img()
    
        def has_top_image(self):
            return self.top_img is not None and self.top_img != ''
    
        def is_valid_url(self):
            """Performs a check on the url of this link to determine if article
            is a real news article or not
            """
            return urls.valid_url(self.url)
    
        def is_valid_body(self):
            """If the article's body text is long enough to meet
            standard article requirements, keep the article
            """
            if not self.is_parsed:
                raise ArticleException('must parse article before checking \
                                        if it\'s body is valid!')
            meta_type = self.extractor.get_meta_type(self.clean_doc)
            wordcount = self.text.split(' ')
            sentcount = self.text.split('.')
    
            if (meta_type == 'article' and len(wordcount) >
                    (self.config.MIN_WORD_COUNT)):
                log.debug('%s verified for article and wc' % self.url)
                return True
    
            if not self.is_media_news() and not self.text:
                log.debug('%s caught for no media no text' % self.url)
                return False
    
            if self.title is None or len(self.title.split(' ')) < 2:
                log.debug('%s caught for bad title' % self.url)
                return False
    
            if len(wordcount) < self.config.MIN_WORD_COUNT:
                log.debug('%s caught for word cnt' % self.url)
                return False
    
            if len(sentcount) < self.config.MIN_SENT_COUNT:
                log.debug('%s caught for sent cnt' % self.url)
                return False
    
            if self.html is None or self.html == '':
                log.debug('%s caught for no html' % self.url)
                return False
    
            log.debug('%s verified for default true' % self.url)
            return True
    
        def is_media_news(self):
            """If the article is related heavily to media:
            gallery, video, big pictures, etc
            """
            safe_urls = ['/video', '/slide', '/gallery', '/powerpoint',
                         '/fashion', '/glamour', '/cloth']
            for s in safe_urls:
                if s in self.url:
                    return True
            return False
    
        def nlp(self):
            """Keyword extraction wrapper
            """
            self.throw_if_not_downloaded_verbose()
            self.throw_if_not_parsed_verbose()
    
            nlp.load_stopwords(self.config.get_language())
            text_keyws = list(nlp.keywords(self.text).keys())
            title_keyws = list(nlp.keywords(self.title).keys())
            keyws = list(set(title_keyws + text_keyws))
            self.set_keywords(keyws)
    
            max_sents = self.config.MAX_SUMMARY_SENT
    
            summary_sents = nlp.summarize(title=self.title, text=self.text, max_sents=max_sents)
            summary = '\n'.join(summary_sents)
            self.set_summary(summary)
    
        def get_parse_candidate(self):
            """A parse candidate is a wrapper object holding a link hash of this
            article and a final_url of the article
            """
            if self.html:
                return RawHelper.get_parsing_candidate(self.url, self.html)
            return URLHelper.get_parsing_candidate(self.url)
    
        def build_resource_path(self):
            """Must be called after computing HTML/final URL
            """
            res_path = self.get_resource_path()
            if not os.path.exists(res_path):
                os.mkdir(res_path)
    
        def get_resource_path(self):
            """Every article object has a special directory to store data in from
            initialization to garbage collection
            """
            res_dir_fn = 'article_resources'
            resource_directory = os.path.join(settings.TOP_DIRECTORY, res_dir_fn)
            if not os.path.exists(resource_directory):
                os.mkdir(resource_directory)
            dir_path = os.path.join(resource_directory, '%s_' % self.link_hash)
            return dir_path
    
        def release_resources(self):
            # TODO: implement in entirety
            path = self.get_resource_path()
            for fname in glob.glob(path):
                try:
                    os.remove(fname)
                except OSError:
                    pass
            # os.remove(path)
    
        def set_reddit_top_img(self):
            """Wrapper for setting images. Queries known image attributes
            first, then uses Reddit's image algorithm as a fallback.
            """
            try:
                s = images.Scraper(self)
                self.set_top_img(s.largest_image_url())
            except TypeError as e:
                if "Can't convert 'NoneType' object to str implicitly" in e.args[0]:
                    log.debug('No pictures found. Top image not set, %s' % e)
                elif 'timed out' in e.args[0]:
                    log.debug('Download of picture timed out. Top image not set, %s' % e)
                else:
                    log.critical('TypeError other than None type error. '
                                 'Cannot set top image using the Reddit '
                                 'algorithm. Possible error with PIL., %s' % e)
            except Exception as e:
                log.critical('Other error with setting top image using the '
                             'Reddit algorithm. Possible error with PIL, %s' % e)
    
        def set_title(self, input_title):
            if input_title:
                self.title = input_title[:self.config.MAX_TITLE]
    
        def set_text(self, text):
            text = text[:self.config.MAX_TEXT]
            if text:
                self.text = text
    
        def set_html(self, html):
            """Encode HTML before setting it
            """
            if html:
                if isinstance(html, bytes):
                    html = self.config.get_parser().get_unicode_html(html)
                self.html = html
                self.download_state = ArticleDownloadState.SUCCESS
    
        def set_article_html(self, article_html):
            """Sets the HTML of just the article's `top_node`
            """
            if article_html:
                self.article_html = article_html
    
        def set_meta_img(self, src_url):
            self.meta_img = src_url
            self.set_top_img_no_check(src_url)
    
        def set_top_img(self, src_url):
            if src_url is not None:
                s = images.Scraper(self)
                if s.satisfies_requirements(src_url):
                    self.set_top_img_no_check(src_url)
    
        def set_top_img_no_check(self, src_url):
            """Provide 2 APIs for images. One at "top_img", "imgs"
            and one at "top_image", "images"
            """
            self.top_img = src_url
            self.top_image = src_url
    
        def set_imgs(self, imgs):
            """The motive for this method is the same as above, provide APIs
            for both `article.imgs` and `article.images`
            """
            self.images = imgs
            self.imgs = imgs
    
        def set_keywords(self, keywords):
            """Keys are stored in list format
            """
            if not isinstance(keywords, list):
                raise Exception("Keyword input must be list!")
            if keywords:
                self.keywords = keywords[:self.config.MAX_KEYWORDS]
    
        def set_authors(self, authors):
            """Authors are in ["firstName lastName", "firstName lastName"] format
            """
            if not isinstance(authors, list):
                raise Exception("authors input must be list!")
            if authors:
                self.authors = authors[:self.config.MAX_AUTHORS]
    
        def set_summary(self, summary):
            """Summary here refers to a paragraph of text from the
            title text and body text
            """
            self.summary = summary[:self.config.MAX_SUMMARY]
    
        def set_meta_language(self, meta_lang):
            """Save langauges in their ISO 2-character form
            """
            if meta_lang and len(meta_lang) >= 2 and \
               meta_lang in get_available_languages():
                self.meta_lang = meta_lang[:2]
    
        def set_meta_keywords(self, meta_keywords):
            """Store the keys in list form
            """
            self.meta_keywords = [k.strip() for k in meta_keywords.split(',')]
    
        def set_meta_favicon(self, meta_favicon):
            self.meta_favicon = meta_favicon
    
        def set_meta_description(self, meta_description):
            self.meta_description = meta_description
    
        def set_meta_data(self, meta_data):
            self.meta_data = meta_data
    
        def set_canonical_link(self, canonical_link):
            self.canonical_link = canonical_link
    
        def set_tags(self, tags):
            self.tags = tags
    
        def set_movies(self, movie_objects):
            """Trim video objects into just urls
            """
            movie_urls = [o.src for o in movie_objects if o and o.src]
            self.movies = movie_urls
    
        def throw_if_not_downloaded_verbose(self):
            """Parse ArticleDownloadState -> log readable status
            -> maybe throw ArticleException
            """
            if self.download_state == ArticleDownloadState.NOT_STARTED:
                raise ArticleException('You must `download()` an article first!')
            elif self.download_state == ArticleDownloadState.FAILED_RESPONSE:
                raise ArticleException('Article `download()` failed with %s on URL %s' %
                      (self.download_exception_msg, self.url))
    
        def throw_if_not_parsed_verbose(self):
            """Parse `is_parsed` status -> log readable status
            -> maybe throw ArticleException
            """
            if not self.is_parsed:
                raise ArticleException('You must `parse()` an article first!')
    


import React, { Component } from 'react'

class Quote extends Component {
    constructor() {
        super();
        this.state = {
            quote: {
                content: '',
                link: '',
                title: '',
            },
            hasQuote: false
        }
    this.END_POINT = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=2";
    }

    getRandomQuote = () => {
        fetch(this.END_POINT)
        .then(response => response.json())
        .then(data => {
            if (data[0].content && data[0].title && data[0].link) {
                let { quote } = this.state;
                let quoteData = data[0];
                quote.content = quoteData.content.replace('<p>',"").replace('</p>','').replace(/&#8217;/g,"'");
                quote.title = quoteData.title;
                quote.link = "https://twitter.com/intent/tweet?text=" + '"' + quote.content + '" -' + quote.title;
                this.setState({ quote }, () => {
                    if(this.state.hasQuote === false) {
                        this.setState({ hasQuote: true })
                    }
                })
            }
            else {
                return console.error('No quote has been found')
            }
        })
    }

    randImg = () => {
        return "https://unsplash.it/450?random=" + Math.floor(Math.random() * 9999);
      };

    tweet = () => {
        
    }
    renderQuote = () => {
        const { title, content } = this.state.quote;
        return (
            <div id="quotespace2">
                <div id="quote">
                {content}
                </div>
                <div id="author">
                -{title}
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.getRandomQuote()
    }
    
    render() {
    const { hasQuote } = this.state;
    const { link } = this.state.quote;
      return (
        <div id='quotebox'>
          <div id='quotespace'>
            {hasQuote === true ? 
            this.renderQuote() : ''}
          </div>
          <div id='imgs'>
            <img alt='' src={hasQuote === true ? 
            this.randImg() : ''} />
          </div>
          <a id='tweetQuote' href={link} target='_blank'><button className="btn fa fa-twitter" id="tweetButton"></button></a>
          <button className="btn" onClick={this.getRandomQuote}>New Quote</button>
        </div>
      )
    }

  }
  
export default Quote;
  
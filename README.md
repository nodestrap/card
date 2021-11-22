# &lt;Card&gt;&lt;/Card&gt;
A flexible and extensible content container, with optional header/footer, themes, many display variants, and more.

## Preview

```jsx
<Card tag='article' theme='primary' size='lg' gradient={true} outlined={true} header={<h2>Card Demo</h2>} footer={<p>Happy coding</p>}>
    <img src='https://picsum.photos/800/400' alt='an image' />
    <img src='https://picsum.photos/800/400' alt='an image' />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum ab illum nisi est distinctio delectus dolores</p>
    <img src='https://picsum.photos/800/400' alt='an image' />
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum ab illum nisi est distinctio delectus dolores</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum ab illum nisi est distinctio delectus dolores</p>
</Card>
```
Rendered to:
```html
<article class="c1 thPrimary szLg gradient outlined">
    <header>
        <h2>Card Demo</h2>
    </header>
    <div class="body">
        <img src="https://picsum.photos/800/400" alt="an image" />
        <img src="https://picsum.photos/800/400" alt="an image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum ab illum nisi est distinctio delectus dolores</p>
        <img src="https://picsum.photos/800/400" alt="an image" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum ab illum nisi est distinctio delectus dolores</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum ab illum nisi est distinctio delectus dolores</p>
    </div>
    <footer>
        <p>Happy coding</p>
    </footer>
</article>
```

## Features
* Includes all features in [`<Indicator />`](https://www.npmjs.com/package/@nodestrap/indicator).
* Customizable via [`@cssfn/css-config`](https://www.npmjs.com/package/@cssfn/css-config).

## Installation

Using npm:
```
npm i @nodestrap/card
```

## Support Us

If you feel our lib is useful for your projects,  
please make a donation to avoid our project from extinction.

We always maintain our projects as long as we're still alive.

[[Make a donation](https://ko-fi.com/heymarco)]

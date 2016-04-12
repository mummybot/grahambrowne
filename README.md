# Graham Browne

## Prerequisites
1. Install [nodejs and npm](https://nodejs.org/en/download/).

2. Install grunt-cli globally

```
npm install -g grunt-cli
```

## Setup project
1. Download this project to your themes directory in your local Wordpress installation. Switch the active theme to this.

1. Open a cmd prompt or terminal and navigate to the grahambrowne theme directory.

2. Install packages

    ```
    npm install
    ```

3. For livereload to work modify the footer to point to the correct virtual host e.g. ```<script src="http://grahambrowne.local:35729/livereload.js"></script>```

4. Run the grunt tasks

    ```
    grunt
    ```

This will generate the CSS files from LESS, and watch files for any changes and livereload.

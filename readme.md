
## About JsG-API

JsG-API is a bootstrap jquery plugin that loads your image gallery. I built it to solve my challenge of using huge php or js packages to do something so little as this. This small project was supported by Laravel's `response()->json($query->paginate($val))` which makes it easy to fetch more data


## How to Use

```js

let config = {
    root : "http://localhost:8000/", 
    mainurl: "api/images/gallery/fetch",
    next_url : "",
    domroot : "app",
    ignition : "pull_images",
    next_btn : "load_more_img",
    close_btn : "close_gui",
    pick_type : "radio",
    imgAnchor : "loadImages",
}
new Jsgapi(config);
```

## config {what the config does}

- root : points to the root url of ur api

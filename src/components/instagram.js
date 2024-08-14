
function Instagram ( {content} ){
    function test () {
        fetch(`/api/fetch-posts`)
    }
    return <><button onClick={test} style={{display: 'flex', margin: 'auto'}}>Click me!</button>{content}</>
}

export default Instagram;

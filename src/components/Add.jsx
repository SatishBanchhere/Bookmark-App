import { Bookmarks } from './Bookmarks'

export function Add({ Add }) {
    if (Add) {
        console.log();
        return <div>
            <Bookmarks />
        </div>
    }
    else{
        return <div></div>
    }
}


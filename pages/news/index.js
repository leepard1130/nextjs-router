// my-domain.com/news

import Link from "next/link";
import { Fragment } from "react/jsx-runtime";

function NewsPage() {
    return (
        <Fragment>
            {/* Fragment: groups sibling elements without adding an extra DOM node */}
            <h1>The news page</h1>
            <ul>
                <li>
                    <Link href="/news/nextjs-framework">News Item 1</Link>
                </li>
                <li>
                    <Link href="/news/learn-nextjs">News Item 2</Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;
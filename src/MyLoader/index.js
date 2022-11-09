import React from "react"
import ContentLoader from "react-content-loader"

function MyLoader() {
    return (
        <ContentLoader
            speed={2}
            width={460}
            height={232}
            viewBox="0 0 476 232 "
            backgroundColor="#f3f3f3"
            foregroundColor="#6171f6"
        >
            <rect x="0" y="1" rx="10" ry="10" width="460" height="72" />
            <rect x="0" y="78" rx="10" ry="10" width="460" height="72" />
            <rect x="0" y="156" rx="10" ry="10" width="460" height="72" />
        </ContentLoader>
    );
}

export { MyLoader };
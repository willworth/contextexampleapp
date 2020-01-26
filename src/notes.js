import React from 'react'

export default function notes() {
    return (
        <div className="notes">
            <h2>Notes :</h2>
            <ul>
                <li>You need a context provider and a consumer.</li>
                <li>The provider is a wrapper on your top level component.</li>
                <li>The consumer can be invoked anywhere "below" your provider.</li>
                <li>The child of consumer is always a function</li>
            </ul>

        </div>
    )
}

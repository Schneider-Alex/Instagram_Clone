import React, { useEffect } from 'react';
const { faker } = require('@faker-js/faker')



function Stories() {

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            ...faker.helpers.contextualCard(),
            id: i,
        }));
        console.log(suggestions);
    }, []);

    return (
        <div>

        </div>
    )
}

export default Stories
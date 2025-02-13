export default defineEventHandler((event) => {
    return [
        {
            group: 'Group 1',
            links:
            [
                {
                    title: 'Example 1',
                    url: 'https://google.com',
                    target: '_blank'
                },
                {
                    title: 'Example 1',
                    url: 'https://google.com',
                    target: '_blank'
                }
            ]
        },
        {
            group: 'Group 2',
            links:
            [
                {
                    title: 'Example 1',
                    url: 'https://google.com',
                    target: '_blank'
                },
                {
                    title: 'Example 1',
                    url: 'https://google.com',
                    target: '_blank'
                }
            ]
        }
    ]
})
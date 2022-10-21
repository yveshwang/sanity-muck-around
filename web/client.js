// client.js
import sanityClient from '@sanity/client'

export default sanityClient({
  projectId: '33z0ua1c', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false // `false` if you want to ensure fresh data
})

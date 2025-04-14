import { verifyWebhook } from '@clerk/nextjs/webhooks'
import {createOrUpdateUser, deleteUser} from '../../../lib/actions/user.js'
export async function POST(req) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt?.data
    const eventType = evt?.type
    console.log(`Received webhook with ID ${id} and event type of ${eventType}`)
    console.log('Webhook payload:', evt.data)
    if (eventType === 'user.created' || eventType === 'user.updated') {
      const { id,first_name,last_name,image_url,email_addresses,username } = evt?.data
      try {
        await createOrUpdateUser(id,
          first_name,
          last_name,
          image_url,
          email_addresses,
          username
        )
        return new Response('User created or updated successfully',{
          status:200
        })
      } catch (error) {
        console.log("route error in creating or updating user -",error);
        return new Response('User created or updated failed',{
          status:400
        })
      }
    }
    if (eventType === 'user.deleted') {
      const { id} = evt?.data
      try {
        await deleteUser(id)
        return new Response('User deleted successfully',{
          status:200
        })
      } catch (error) {
        console.log("route error in deleting user -",error);
        return new Response('User deleting failed',{
          status:400
        })
      }

    }
    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}
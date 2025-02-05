import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

export const processPayment = async (amount: number, currency: string = 'usd') => {
  try {
    const stripe = await stripePromise;
    
    // Call your backend to create a payment intent
    const response = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount, currency }),
    });
    
    const { clientSecret } = await response.json();

    // Confirm the payment
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: {
          // Card details would be collected via Stripe Elements
        },
        billing_details: {
          // Billing details would be collected from the user
        },
      },
    });

    if (result.error) {
      throw new Error(result.error.message);
    }

    return result.paymentIntent;
  } catch (error) {
    console.error('Payment error:', error);
    throw error;
  }
};
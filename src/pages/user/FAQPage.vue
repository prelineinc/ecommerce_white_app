<script setup lang="ts">
import { computed, ref } from 'vue'

interface FAQ {
  id: number
  header: string
  text: string
}

const header = `How long we deliver your first blog post?`
const text = `It takes 2-3 weeks to get your first blog post ready. That includes the in-depth research & creation of your monthly content marketing strategy that we do before writing your first blog post, Ipsum available .`

const faqs = ref<FAQ[]>([
  {
    id: 1,
    header: 'How do I place an order?',
    text: 'To place an order, simply browse through the categories, select the items you like, choose the appropriate size (for clothing), and add them to your cart. Once you’re ready, proceed to checkout and follow the instructions to complete your purchase.'
  },
  {
    id: 2,
    header: 'What payment methods do you accept?',
    text: 'We accept various payment methods, including credit/debit cards (Visa, MasterCard, etc..) and digital wallets (Paytm, Google Pay).'
  },
  {
    id: 3,
    header: 'What sizes are available for kids clothing?',
    text: 'We offer a wide range of sizes for different age groups, from newborns to teenagers. You can refer to our Size Guide available on every product page for accurate measurements.'
  },
  {
    id: 4,
    header: 'Do you offer discounts or promotions?',
    text: 'Yes, we regularly offer discounts and promotions. Make sure to follow us on social media to stay updated on the latest deals and offers.'
  },
  {
    id: 5,
    header: 'Are the beauty products safe for kids?',
    text: 'Yes, all beauty products we sell are dermatologically tested and safe for kids. We recommend checking the product descriptions and ingredients for any specific allergies or concerns.'
  },
  {
    id: 6,
    header: 'Can I cancel my order?',
    text: 'You can cancel your order before it is shipped. To cancel, go to your order details and click on the Cancel Order button.'
  },
  {
    id: 7,
    header: 'How long does delivery take?',
    text: 'Delivery times vary based on your location and the shipping option selected. Standard delivery takes 3-7 business days.'
  },
  {
    id: 8,
    header: 'How can I contact customer support?',
    text: 'You can reach our customer support team through the Help & Support section in the app. You can also email us at prelineinc@gmail.com or call us at +91-7539942415.'
  }
])

const activeFaq = ref<number | null>(null)

const oddFaqs = computed(() => faqs.value.filter((faq) => faq.id % 2 !== 0))
const evenFaqs = computed(() => faqs.value.filter((faq) => faq.id % 2 === 0))

const handleToggle = (faqId: number) => {
  activeFaq.value = activeFaq.value === faqId ? null : faqId
}
</script>

<template>
  <section
    class="relative z-20 overflow-hidden bg-white dark:bg-dark pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]"
  >
    <div class="container mx-auto">
      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4">
          <div class="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
            <span class="mb-2 block text-lg font-semibold text-primary"> FAQ </span>
            <h2
              class="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-[40px] sm:leading-[48px]"
            >
              Any Questions? Look Here
            </h2>
            <p class="text-base text-body-color dark:text-dark-6">
              There are many variations of passages of Lorem Ipsum available but the majority have
              suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>

      <div class="-mx-4 flex flex-wrap">
        <div class="w-full px-4 lg:w-1/2">
          <template :key="faq.id" v-for="faq in oddFaqs">
            <div
              class="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button class="faq-btn flex w-full text-left" @click="handleToggle(faq.id)">
                <div
                  class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5"
                >
                  <svg
                    class="fill-primary stroke-primary duration-200 ease-in-out"
                    :class="{ 'rotate-180': activeFaq === faq.id }"
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill=""
                      stroke=""
                    />
                  </svg>
                </div>

                <div class="w-full">
                  <h4 class="mt-1 text-lg font-semibold text-dark dark:text-white">
                    {{ faq.header }}
                  </h4>
                </div>
              </button>

              <div v-show="activeFaq === faq.id" class="pl-[62px]">
                <p class="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {{ faq.text }}
                </p>
              </div>
            </div>
          </template>
        </div>

        <div class="w-full px-4 lg:w-1/2">
          <template :key="faq.id" v-for="faq in evenFaqs">
            <div
              class="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8"
            >
              <button class="faq-btn flex w-full text-left" @click="handleToggle(faq.id)">
                <div
                  class="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5"
                >
                  <svg
                    class="fill-primary stroke-primary duration-200 ease-in-out"
                    :class="{ 'rotate-180': activeFaq === faq.id }"
                    width="17"
                    height="10"
                    viewBox="0 0 17 10"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                      fill=""
                      stroke=""
                    />
                  </svg>
                </div>

                <div class="w-full">
                  <h4 class="mt-1 text-lg font-semibold text-dark dark:text-white">
                    {{ faq.header }}
                  </h4>
                </div>
              </button>

              <div v-show="activeFaq === faq.id" class="pl-[62px]">
                <p class="py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
                  {{ faq.text }}
                </p>
              </div>
            </div>
          </template>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 right-0 z-[-1]">
      <svg
        width="1440"
        height="886"
        viewBox="0 0 1440 886"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1308.65"
            y1="1142.58"
            x2="602.827"
            y2="-418.681"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#3056D3" stop-opacity="0.36" />
            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  </section>
</template>

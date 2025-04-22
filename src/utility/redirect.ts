import { useRouter,useRoute } from 'vue-router'

const router = useRouter()

const RedirectPage = (page: string) => {
  console.log('page', page);
  router.push({ path: `/${page}` });
}

export default RedirectPage

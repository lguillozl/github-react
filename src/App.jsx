import { Layout } from './components/Layout'
import { Profile } from './components/Profile'
import { Filters } from './components/Filters'
import { RepoList } from './components/RepoList'
import { Search } from './components/Search'

const App = () => {

  return (
    <Layout>
        <Profile />
        <Filters />
        <RepoList />
        <Search />
    </Layout>
  )
}

export default App

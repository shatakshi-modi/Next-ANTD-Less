import LayoutPage from '../components/Layout/LayoutPage'
import styles from '../styles/Home.module.less'
import ExpenseTracker from './ExpenseTracker'
export default function Home() {
  return (
    <>
      <LayoutPage>
        <ExpenseTracker></ExpenseTracker>
      </LayoutPage>
    </>
  )
}

import Link from '../helpers/Link'

const MailTo = ({ mailto, label }) => {
  return (
    <Link
      href='/sendmail'
      onClick={e => {
        window.location.href = mailto
        e.preventDefault()
      }}>
      {label}
    </Link>
  )
}

export default MailTo

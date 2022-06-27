import Head from 'next/head'

function HeadComponent({ title, metaContent }) {
  if (!title) title = 'Node Identity'
  else if (title !== 'Node Identity') title = 'NI ' + title

  const meta = metaContent ? <meta name={metaContent?.name} content={metaContent?.content} /> : <meta name='description' content='Home of Node Identity' />

  return (
    <Head>
      <title>{title}</title>
      {meta}
    </Head>
  )
}

export default HeadComponent

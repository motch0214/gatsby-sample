import React from "react"

import styles from "./Document.module.css"

const Document: React.FC<{ html: string }> = ({ html }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl px-2 py-8">
        <div
          className={styles.container}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export default Document

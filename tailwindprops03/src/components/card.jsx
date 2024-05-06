import React from 'react'

function Card({username="puji",post="Not Signed Yet"}) {
    // console.log(props);
  return (
    <div>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://miro.medium.com/v2/resize:fit:1400/1*Q0uAcG_S2J2gkcUaF5PyxA.png" alt="" width="384" height="512"/>
  <div className="pt-6 space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div>
        {username}
      </div>
      <div>
        {post}
      </div>
    </figcaption>
  </div>
</figure>
    </div>
  )
}

export default Card
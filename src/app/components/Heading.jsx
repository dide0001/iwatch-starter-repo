"use client"

import Image from "next/image"

export default function Heading() {
  return (
    <section className="header">
      <div className="header-inner">
        <Image
          src="/bi_apple.png"
          alt="Apple logo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          priority
        />

        <div>
          <a href="/">Mac</a>
          <a href="/">Iphone</a>
          <a href="/">Ipad</a>
          <a href="/">iWatch</a>
          <a href="/">Support</a>
        </div>

        <div>
          <Image
            src="/search.png"
            alt="Search"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
          
          <Image
            src="/shopping-bag.png"
            alt="Shopping bag"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
    </section>
  )
}
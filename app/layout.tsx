import "./globals.css";
import Head from "next/head";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <Head>
        <title>Next13 Blog App</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="NextJS version 13を試すために作成するアプリケーション"
        />
      </Head>

      <body>
        <header className="bg-yellow-500">
          <div className="container px-5 py-24 mx-auto flex justify-between">
            <h2 className="text-3xl">Logo</h2>
            <nav className="">
              <ul className="flex">
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}

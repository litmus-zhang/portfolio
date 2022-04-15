import Link from "next/link";
import Image from "next/image";
import Button from './button'


export default function Layout({ children })
{
    const linkedin = "https://www.linkedin.com/in/lukmon-abdulsalam/";
    const github = "https://github.com/litmus-zhang"
    const twitter = "https://twitter.com/litmus13lukman";
  return (
      <div className="layout">
          <header className='header'>
          <Link href="/">
                  <a>
                      <Image src='/Logo.svg' width={100} height={40} alt="Logo"
                  />
                  </a>
            </Link>
         
              <nav>
          <Link href="/">
                  <a> Blog </a>
                    </Link>
          <Link href="/">
                  <a>Projects </a>
                    </Link>
          <Link href="/">
                  <a> Freebies</a>
                    </Link>
              </nav>
          </header>
          <div className="hero">
              <h1>I diagnose problems with <span className="data"> data </span>, then treat with <span className="design"> design</span>
              </h1>
              <p>
                  I have worked on blockchain projects
              </p>
              <Button text="Say Hi ❤"/>
          </div>
          <div className="page-content">
            {children}
          </div>

          <footer className="footer">
          <Link href="/">
                  <a>
                      <Image src='/Logo.svg' width={100} height={40} alt="Logo"
                  />
                  </a>
            </Link>
              <div className="socials">
                  <a href={ twitter}> Twitter </a>
                  <a href={ linkedin}> Linkedin </a>
                  <a href={github}> Github </a>
              </div>
          </footer>
          <style jsx>{`
          .hero{
              color: white;
              text-align: center;
              line-height: 1;
          }
          .data{
              color: lightblue
          }
          .design{
              color: lightblue
          }
         header{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem 4rem;
         }
         nav{
            display: flex;
            gap: 1rem;
         }
        
         footer{
             display:flex;
             align-items: center;
             justify-content: space-between;
             padding: 1rem 4rem;
         }
         .socials{
             display: flex;
             gap: 1rem
         }
         a:hover{
             color: lightblue;
         }
          `}</style>
    </div>
  )
}

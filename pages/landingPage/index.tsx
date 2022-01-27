import type { NextPage } from "next";

import EntryContent from "./EntryContent";
import Guide from "./Guide";
import Posts from "./Posts";

const LandingPage: NextPage = () => {
  return (
    // <Header></Header>
    // <Navbar></Navbar>
    // <Footer></Footer>
    <main className="main">
      <section id="main" className="main">
        <EntryContent />
        <Posts />
        {/* <Guide /> */}
      </section>
    </main>
  );
};

export default LandingPage;

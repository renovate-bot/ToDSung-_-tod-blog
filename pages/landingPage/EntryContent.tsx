import Image from "next/image";

const EntryContent = () => {
  return (
    <div className="entry-content relative my-4 flex flex-col justify-center">
      <div className="image__wrapper">
        <Image
          src="/entryImage.jpg"
          width="3840"
          height="2160"
          objectFit="contain"
          alt="entryImage"
        />
      </div>
      <div className="text__wrapper absolute p-5 bg-white flex flex-col rounded-r-3xl">
        <h1 className="introduction__title mb-4 text-8xl font-['DiamorScript'] text-amber-800">
          I am ToD
        </h1>
        <div className="introduction__content text-3xl font-['JasonHandwriting']">
          <p>努力嘗試分享的小小前端</p>
          <p>希望這邊有任何一篇文章能夠幫助到你！</p>
        </div>
      </div>
    </div>
  );
};

export default EntryContent;

import Image from "next/image";

const postsExample = [
  "/mock_image/column.jpg",
  "/mock_image/column.jpg",
  "/mock_image/column.jpg",
];

const GuideItem = ({ name, imageSrc, width, height }) => (
  <div className="flex">
    {width && height ? (
      <Image
        src={imageSrc}
        width={width}
        height={height}
        objectFit="contain"
        alt="entryImage"
      />
    ) : (
      <Image
        src={imageSrc}
        objectFit="contain"
        layout="fill"
        // layout="intrinsic"
        alt="entryImage"
      />
    )}
    <span className="absolute z-10">{name}</span>
  </div>
);

const Guide = ({ topRows = postsExample }) => {
  return (
    <>
      <h2 className="guide my-4 text-6xl font-['DiamorScript']">Guide</h2>
      <div className="guide grid grid-cols-3 grid-rows-3 gap-6">
        <div className="guide__wrapper text-center col-span-2">
          <GuideItem imageSrc="/mock_image/row.jpg" width="900" height="506" />
        </div>
        <div className="guide__wrapper text-center" />
        {topRows.map((post, index) => {
          return (
            <div className="guide__wrapper text-center row-span-2" key={index}>
              <GuideItem imageSrc={post} name={post} width="400" height="600" />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Guide;

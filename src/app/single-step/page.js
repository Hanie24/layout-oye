import Bolillo from "@/components/bolillo";
import Row from "@/components/row";

export default function SingleStep() {
  return (
    <Bolillo>
      <Row className="bg-loud">1</Row>
      <Row>
        <div className="flex flex-col xl:flex-row w-full">
          <div className="w-full xl:w-[920px] bg-mint">
            <div className="bg-serenity h-50 sm:h-84.5 xl:h-120">video</div>
            <div className="bg-loud sm:mb-7.6 xl:mb-10 ">
              <div className="bg-grayLigth flex flex-col sm:flex-row w-full">
                <div className="bg-purple w-81 sm:w-82 xl:w-110 ml-3.5 sm:ml-7.6 xl:ml-7.6 mt-6.1 sm:mt-7.6">
                  título
                </div>
                <div className="bg-melon w-81 sm:w-54.5 xl:w-78 ml-3.5 sm:ml-7.6 xl:ml-15 sm:mt-7.6">
                  botones
                </div>
              </div>
              <div className="bg-blueLight w-81 sm:w-1/2 ml-3.5 sm:ml-7.6 xl:ml-7.6 sm:mt-6.1">
                descripción
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[360px] bg-purple">
            <div className="bg-bloom ml-3.5 sm:ml-7.5 xl:ml-3.5 mt-7.6 mb-2.5 sm:mt-8 sm:mb-4.5 xl:mt-7.6 xl:mb-2.5">
              título de la sección
            </div>
            <div className="bg-mint flex">
              <div className="bg-serenity h-22 w-22 sm:h-26 sm:w-26 ml-3.5 xl:h-22 xl:w-22 sm:ml-7.5 xl:ml-3.5 my-2.5 sm:my-2 xl:my-2.5">
                foto
              </div>
              <div className="bg-loud h-22 w-54 ml-5.5 sm:w-84 sm:h-26 xl:h-22 xl:w-54 sm:ml-4.5 xl:ml-5.5 my-2.5 sm:my-2 xl:my-2.5">
                descripción del video
              </div>
            </div>
          </div>
        </div>
      </Row>
      <Row className="bg-blueLight">3</Row>
    </Bolillo>
  );
}

import { useState } from "react";
import YTextField from "../components/TextFiled";
import { handlePaste } from "../utils/handlePaste";
import Modal from "../components/Modal";

const FindTafadhul = () => {
  const [selfValue, setSelfValue] = useState("");
  const [firstValue, setFirstValue] = useState("");
  const [tanafusiValue, setTanafusiValue] = useState("");
  const [tafadhuli, setTafadhuli] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function tafadhuliResult() {
    const self = parseFloat(selfValue);
    const first = parseFloat(firstValue);
    const tanafusi = parseFloat(tanafusiValue);

    const relativeValue: number = ((self * 100) / first + self / 2) / 2;
    const tafadhuliVale = 70 * (relativeValue / 100) + (tanafusi / 100) * 30;

    setTafadhuli(tafadhuliVale.toString());
    console.log(tafadhuli);
  }

  function showResults() {
    return (
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="modalRight">
          <div className="content">
            <h1 className="p-10 text-2xl">المعادلة التفاضلية: {tafadhuli} </h1>
          </div>
          <p
            className="border cursor-pointer px-3 py-2 rounded-md active:bg-slate-300 hover:bg-slate-100 text-xl text-blue-900"
            onClick={() => setIsOpen(false)}
          >
            اغلاق
          </p>
        </div>
      </Modal>
    );
  }

  return (
    <>
      <section
        dir="rtl"
        id="tafadhul-section"
        className="rounded-lg flex justify-center items-center"
      >
        <div className="mt-10 bg-blue-100 rounded-xl">
          <h1 className="text-center mt-10 sm:text-xl md:text-3xl">
            ايجاد المعادلة التفاضلية
          </h1>
          <div className="mt-5 mx-10  p-5 sm:min-w-96 md:min-w-[650px]">
            <YTextField
              Id="slef"
              Autofocus
              Name="self"
              Placeholder="معدل المتقدم"
              Value={selfValue}
              onChange={(e) => setSelfValue(e.target.value)}
              onPaste={handlePaste}
            ></YTextField>
            <YTextField
              Id="slef"
              Autofocus={false}
              Name="self"
              Placeholder="معدل الاول على الدفعة"
              Value={firstValue}
              onChange={(e) => setFirstValue(e.target.value)}
              onPaste={handlePaste}
            ></YTextField>
            <YTextField
              Id="slef"
              Autofocus={false}
              Name="self"
              Placeholder="درجة الامتحان التنافسي"
              Value={tanafusiValue}
              onChange={(e) => setTanafusiValue(e.target.value)}
              onPaste={handlePaste}
            ></YTextField>

            <div className="text-center">
              <button
                type="button"
                className="text-center sm:text-xl md:text-2xl bg-white p-2 rounded-md hover:bg-blue-400 hover:text-white hover:font-semibold"
                onClick={() => {
                  if (selfValue && firstValue && tanafusiValue) {
                    tafadhuliResult();
                    setIsOpen(true);
                  }
                }}
              >
                ايجاد المعادلة
              </button>
              {isOpen && showResults()}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FindTafadhul;

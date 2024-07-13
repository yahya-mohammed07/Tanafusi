import FindTafadhul from "./containers/tafadhul";

function App() {
  return (
    <>
      <div className="app flex flex-col min-h-screen">
        <main>
          <FindTafadhul />
        </main>

        <footer className="mt-auto text-center bg-blue-100">
          <span className="font-semibold ">
            <a
              className="hover:bg-pink-300"
              href="https://github.com/yahya-mohammed07"
            >
              Yahya
            </a>
          </span>
          <span>تم عمل الموقع من قبل</span>
        </footer>
      </div>
    </>
  );
}

export default App;

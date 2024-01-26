import { faker } from "@faker-js/faker";

const images = [
  "https://images.unsplash.com/photo-1597551681492-10c86e481548?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww",
  `https://images.unsplash.com/photo-1642958570064-9247d7abb732?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
  "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1675767304968-2e8617b00d37?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZyZWUlMjBpbWFnZXN8ZW58MHwxfDB8fHww",
];

function App() {
  return (
    <div className="grid min-h-screen place-items-center">
      <ul className="flex gap-4 w-full max-w-6xl">
        {[...Array(4).keys()].map((item, idx) => (
          <li
            key={item}
            className="bg-rose-300 rounded-2xl h-[500px] w-full flex-1 relative overflow-hidden group hover:grow-[1.25] transition-all duration-300"
          >
            <img
              className="absolute h-full w-full inset-0 object-cover"
              src={images[idx]}
              alt=""
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 from-30% backdrop-blur-sm">
              <div className="w-48">
                <h2 className="text-2xl text-white leading-tight font-medium">
                  {faker.lorem.words()}
                </h2>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-300">
                  <p className="text-white/70 overflow-hidden mt-2 opacity-0 group-hover:opacity-100 transsition duration-300">
                    {faker.lorem.sentences(2)}
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

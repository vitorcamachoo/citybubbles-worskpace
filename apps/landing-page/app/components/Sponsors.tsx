export function MainSponsor() {
  return (
    <>
      <p className="text-base font-normal text-neutral-500">Our partnership</p>
      <p></p>
    </>
  );
}

export function SecondarySponsor() {
  return (
    <div className="flex flex-row items-center gap-4">
      <a href="https://www.momondo.dk/city-guides/discover-Funchal.13732.guide.ksp">
        <img
          src="/images/sponsors/momondo.svg"
          className="w-24"
          alt="momondo"
        />
      </a>
      <a href="https://www.tripadvisor.com.br/Attraction_Review-g189167-d3825814-Reviews-CityBubbles-Funchal_Madeira_Madeira_Islands.html">
        <img
          src="/images/sponsors/tripadvisor.svg"
          className="w-24"
          alt="tripadvisor"
        />
      </a>
    </div>
  );
}

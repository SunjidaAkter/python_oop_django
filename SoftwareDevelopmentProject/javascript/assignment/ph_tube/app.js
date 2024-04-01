const timing = (seconds) => {
  let str = "";
  if (seconds < 60) {
    str += `${seconds} seconds ago`;
    return str;
  } else if (seconds < 3600) {
    const minutes = Math.floor(seconds / 60);
    str += `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    return str;
  } else {
    const hours = Math.floor(seconds / 3600);
    const remainingMinutes = Math.floor((seconds % 3600) / 60);
    str += `${hours} ${hours === 1 ? "hour" : "hours"} ${remainingMinutes} ${remainingMinutes === 1 ? "minute" : "minutes"
      } ago`;
    return str;
  }
}

let asc = false;
const sorting = (data, opts) => {
  const sortedData = data.sort((a, b) => {
    if (opts) {
      console.log(opts);
      return parseInt(b.others.views) - parseInt(a.others.views);
    } else {
      console.log(opts);
      return parseInt(a.others.views) - parseInt(b.others.views);
    }
  });
  return sortedData;
}

let videos = [];
const dataFetching = async (id) => {
  document.getElementById("spinner").classList.remove("hidden");
  const nullContentContainer = document.getElementById("null-content");
  nullContentContainer.innerHTML = "";
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  try {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/videos/category/${id}`
    );
    const data = await res.json();
    videos = data.data;
  }
  catch (err) {
    console.log("ERROR : ", err);
  }
  document.getElementById("spinner").classList.add("hidden");
  document.getElementById("sort-by").classList.add("hidden");
  if (videos.length > 0) {
    document.getElementById("sort-by").classList.remove("hidden");
    videoContainer.innerHTML = "";
    showVideos(videos);
  } else {
    document.getElementById("sort-by").classList.add("hidden");
    // document.getElementById("spinner").classList.remove("hidden");
    nullContentContainer.innerHTML = "";
    NullData();
  }
};

let categories = [];
const gettingCategories = async (id) => {
  activeId = id;
  if (categories.length == 0) {
    try {
      const res = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
      );
      const data = await res.json();
      categories = data.data;
    }
    catch (err) {
      console.log("ERROR : ", err);
    }
  }
  const categoryContainer = document.getElementById("categories-container");
  categoryContainer.innerHTML = "";
  console.log(id);
  categories?.forEach((category) => {
    console.log(category);
    const div = document.createElement("div");
    div.innerHTML = `
    <li  
    id = ${category.category_id}
    onclick="gettingCategories(${category.category_id})"
    class="divide-y divide-dashed  ${id == category.category_id
        ? "bg-[#FF1F3D] text-white"
        : "bg-[#25252526] text-neutral-500"
      } rounded-md">
              <span class="sm:px-4 px-2.5 py-2 ">${category.category}</span>
            </li>`;
    categoryContainer.appendChild(div);
  });
  dataFetching(id);
};

const NullData = () => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  const nullContentContainer = document.getElementById("null-content");
  const div = document.createElement("div");
  div.innerHTML = `  <div class="flex flex-col mt-20 items-center justify-center">
  <img src="./src/Icon.png" class="h-[140px] w-[140px]" alt="" />
  <h2
    class="mt-8 text-3xl text-center font-bold md:w-[400px] w-[80%] mx-auto"
  >
    Oops!! Sorry, There is no content here
  </h2>
</div>`;
  nullContentContainer.appendChild(div);
};
const sortHandler = () => {
  asc = !asc;
  if (!asc) {
    document
      .getElementById("sort-container")
      .setAttribute("data-tip", "Highest to Lowest");
  } else {
    document
      .getElementById("sort-container")
      .setAttribute("data-tip", "Lowest to Highest");
  }
  const sortedVideo = sorting(videos, asc);
  showVideos(sortedVideo);
};
const showVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");
  videoContainer.innerHTML = "";
  videos?.forEach((video) => {
    const div = document.createElement("div");
    div.innerHTML = ` <div
    class="h-fit rounded-lg"
  >
  <figure class="w-full min-h-[100px] h-full   sm:h-[200px] relative">
  <img
    src="${video.thumbnail}"
    class="h-full w-full rounded-md"
    alt="product"
  />
  <div
    class="absolute bottom-3 right-3 text-white text-xs bg-[#171717] p-0.5 rounded-md"
  >
  <span> ${video?.others?.posted_date ?
        timing(video?.others?.posted_date) :
        ""}</span>
  </div>
</figure>
    <div class="flex gap-3 mt-5">
      <div class="w-fit mt-0.5">
        <div class="avatar">
          <div class="w-10  rounded-full">
            <img src=${video?.authors[0].profile_picture} />
          </div>
        </div>
      </div>
      <div class="flex-1">
        <h3
          class="text-neutral-950 max-w-prose line-clamp-2 font-bold text-base "
        >
        ${video.title}
        </h3>
        <div class="flex gap-2  mt-2 mb-2 items-center">
          <p class="text-sm text-heroText">${video?.authors[0].profile_name}</p>
         ${video?.authors[0].verified
        ? '<img src="./src/fi_10629607.png" alt="" />'
        : ""
      }
        </div>
        <p class="text-sm mt-2 text-heroText">${video?.others?.views} views</p>
      </div>
    </div>
  </div>`;
    videoContainer.appendChild(div);
  });
};

gettingCategories("1000");

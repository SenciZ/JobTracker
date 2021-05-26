const UICtrl = (function () {
  let jobName = document.querySelector(".jobName");
  let jobPo = document.querySelector(".jobPo");
  let poReceived = document.querySelector(".poReceived");
  let artReceived = document.querySelector(".artReceived");
  let garmentsReceived = document.querySelector(".garmentsReceived");
  let dueDate = document.querySelector(".dueDate");
  let jobDescription = document.querySelector(".jobDescription");
  let addBtn = document.querySelector(".addJobToList");
  let jobContainer = document.querySelector(".jobListPanel");

  addBtn.addEventListener("click", function () {
    console.log("Clciked");
    event.preventDefault();
    DataCtrl.jobList.push(
      DataCtrl.newJob(
        jobName.value,
        jobPo.value,
        poReceived.value,
        artReceived.value,
        garmentsReceived.value,
        dueDate.value,
        jobDescription.value
      )
    );
    UICtrl.addJobsToPage();
        jobName.value="";
        jobPo.value="";
        poReceived.value="";
        artReceived.value="";
        garmentsReceived.value="";
        dueDate.value="";
        jobDescription.value="";

  });

  const addJobsToPage = function () {
    if (jobContainer.firstChild) {
      while (jobContainer.firstChild) {
        jobContainer.removeChild(jobContainer.firstChild);
      }
    }
    for (let i = 0; i < DataCtrl.jobList.length; i++) {
      const jobDiv = document.createElement("div");
      jobDiv.classList.add("job");
      jobDiv.setAttribute("id", i);
      jobContainer.appendChild(jobDiv);

      const jobHeader = document.createElement("div");
      jobHeader.classList.add("jobHeader");
      jobDiv.appendChild(jobHeader);

      const titleofJob = document.createElement("h2");
      titleofJob.classList.add("TitleOfJob");
      titleofJob.textContent = DataCtrl.jobList[i].name;
      jobHeader.appendChild(titleofJob);

      const POofJob = document.createElement("h2");
      POofJob.classList.add("POofJob");
      POofJob.textContent = DataCtrl.jobList[i].PO;
      jobHeader.appendChild(POofJob);

      const jobDates = document.createElement("div");
      jobDates.classList.add("jobDates");
      jobDiv.appendChild(jobDates);

      const receivedPO = document.createElement("h4");
      receivedPO.classList.add("ReceivedPO");
      receivedPO.textContent = "PO Received On: " + DataCtrl.jobList[i].poReceived;;
      jobDates.appendChild(receivedPO);

      const receivedArt = document.createElement("h4");
      receivedArt.classList.add("ReceivedArt");
      receivedArt.textContent = "Art Received On: " + DataCtrl.jobList[i].artReceived;
      jobDates.appendChild(receivedArt);

      const receivedGarments = document.createElement("h4");
      receivedGarments.classList.add("ReceivedGarments");
      receivedGarments.textContent = "Garments Received On: " + DataCtrl.jobList[i].garmentsReceived;
      jobDates.appendChild(receivedGarments);

      const dueOn = document.createElement("h4");
      dueOn.classList.add("DueOn");
      dueOn.textContent = "Due On: "+ DataCtrl.jobList[i].dueDate;
      jobDates.appendChild(dueOn);

      const descriptionOfJob = document.createElement("div");
      descriptionOfJob.classList.add("jobDescriptions");
      jobDiv.appendChild(descriptionOfJob);

      const descriptionText = document.createElement("p");
      descriptionText.classList.add("description");
      descriptionText.textContent = DataCtrl.jobList[i].description;
      descriptionOfJob.appendChild(descriptionText);
    }
  };

  return {
    jobName,
    jobPo,
    poReceived,
    artReceived,
    garmentsReceived,
    dueDate,
    jobDescription,
    addJobsToPage,
  };
})();

const DataCtrl = (function () {
  const jobList = [];
  const newJob = function (
    name,
    PO,
    poReceived,
    artRecieved,
    garmentsReceived,
    dueDate,
    description
  ) {
    return {
      name,
      PO,
      poReceived,
      artRecieved,
      garmentsReceived,
      dueDate,
      description,
    };
  };

  return {
    newJob,
    jobList,
  };
})();

// function addBooksToPage() {
//   if (bookContainer.firstChild) {
//     while (bookContainer.firstChild) {
//       bookContainer.removeChild(bookContainer.firstChild);
//     }
//   }
//   for (let i = 0; i < myLibrary.length; i++) {
//     const bookContainer = document.getElementById("bookContainer");
//     const bookDiv = document.createElement("div");
//     bookDiv.classList.add("book");
//     bookDiv.setAttribute("id", i);
//     bookContainer.appendChild(bookDiv);

//     const bookTitleInDiv = document.createElement("h1");
//     bookTitleInDiv.classList.add("titleOfBook");
//     bookTitleInDiv.textContent = myLibrary[i].title;
//     bookDiv.appendChild(bookTitleInDiv);

//     const bookAuthorInDiv = document.createElement("h2");
//     bookAuthorInDiv.classList.add("authorOfBook");
//     bookAuthorInDiv.textContent = myLibrary[i].author;
//     bookDiv.appendChild(bookAuthorInDiv);

//     const bookPagesInDiv = document.createElement("h2");
//     bookPagesInDiv.classList.add("numberOfPages");
//     bookPagesInDiv.textContent = myLibrary[i].pages;
//     bookDiv.appendChild(bookPagesInDiv);

//     const readStatus = document.createElement("input", "checkbox");
//     readStatus.setAttribute("type", "checkbox");
//     readStatus.setAttribute("id", i);
//     readStatus.checked = myLibrary[i].status;
//     readStatus.addEventListener("change", () => {
//       myLibrary[i].statusChange(i);
//     });
//     bookDiv.appendChild(readStatus);

//     const removeButton = document.createElement("button");
//     removeButton.classList.add("removeBtn");
//     removeButton.textContent = "Remove Book";
//     removeButton.addEventListener("click", () => {
//       myLibrary.splice(`${bookDiv.id}`, 1);
//       addBooksToPage();
//     });
//     bookDiv.appendChild(removeButton);
//   }

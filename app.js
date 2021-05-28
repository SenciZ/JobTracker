// Storage Controller
const StorageCtrl = (function () {
  const storeItem = function (item) {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      items = JSON.parse(localStorage.getItem("items"));
      items.push(item);
      localStorage.setItem("items", JSON.stringify(items));
    }
  };

  const getItem = function () {
    let items;
    if (localStorage.getItem("items") === null) {
      items = [];
    } else {
      items = JSON.parse(localStorage.getItem("items"));
    }
    return items;
  };

  return { storeItem, getItem };
})();

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
    const jobE = DataCtrl.newJob(
      jobName.value,
      jobPo.value,
      poReceived.value,
      artReceived.value,
      garmentsReceived.value,
      dueDate.value,
      jobDescription.value
    );
    DataCtrl.jobList.push(jobE);
    StorageCtrl.storeItem(jobE);
    UICtrl.addJobsToPage();
    jobName.value = "";
    jobPo.value = "";
    poReceived.value = "";
    artReceived.value = "";
    garmentsReceived.value = "";
    dueDate.value = "";
    jobDescription.value = "";
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
      if (!jobContainer.firstChild) {
        jobContainer.appendChild(jobDiv);
      } else {
        jobContainer.insertBefore(jobDiv, jobContainer.firstChild);
      }
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
      receivedPO.textContent =
        "PO Received On: " + DataCtrl.jobList[i].poReceived;
      jobDates.appendChild(receivedPO);

      const receivedArt = document.createElement("h4");
      receivedArt.classList.add("ReceivedArt");
      receivedArt.textContent =
        "Art Received On: " + DataCtrl.jobList[i].artReceived;
      jobDates.appendChild(receivedArt);

      const receivedGarments = document.createElement("h4");
      receivedGarments.classList.add("ReceivedGarments");
      receivedGarments.textContent =
        "Garments Received On: " + DataCtrl.jobList[i].garmentsReceived;
      jobDates.appendChild(receivedGarments);

      const dueOn = document.createElement("h4");
      dueOn.classList.add("DueOn");
      dueOn.textContent = "Due On: " + DataCtrl.jobList[i].dueDate;
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
  const jobList = StorageCtrl.getItem();
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

UICtrl.addJobsToPage();

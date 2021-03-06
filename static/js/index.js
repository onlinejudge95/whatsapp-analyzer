document.addEventListener("DOMContentLoaded", function() {

    var uploadField = document.getElementById("file");
    var uploadFieldLabel = document.getElementById("file-label");
    var displayChartsButton = document.getElementById("display-charts-button");
    var processingSpinner = document.getElementById("processing-spinner");

    var pillsAndroidTab = document.getElementById("pills-Android-tab");
    var pillsIOSTab = document.getElementById("pills-IOS-tab");
    var pillsAndroid = document.getElementById("pills-android");
    var pillsIOS = document.getElementById("pills-IOS");

    var infoNotyf  = new Notyf({
        types: [
            {
              type: 'info',
              background: '#C96BE3',
              icon: false
            }
          ]
        });

    if (uploadField.files[0]) {
        uploadFieldLabel.innerHTML = uploadField.files[0].name;
    } else {
        displayChartsButton.disabled = true;
        uploadFieldLabel.innerHTML = "Select conversation file";
    }

    uploadField.onchange = function () {
        if (this.files[0].size > 1048576*10 ) {
            alert("Your file is too big (> 10 Mo)");
            this.value = "";
            displayChartsButton.disabled = true;
            uploadFieldLabel.innerHTML = "Select conversation file";
        } else {
            uploadFieldLabel.innerHTML = this.files[0].name;
            displayChartsButton.disabled = false;
        }
    };

    displayChartsButton.onclick = function () {
        processingSpinner.style.visibility = "visible";
        if (uploadField.files[0].size > 1048576*1) {
            infoNotyf.open({
                type: 'info',
                message: 'Your data is processing. <br> Your file is heavy, so the processing might take up to 10 seconds',
                duration: '8000'
            });
        } else {
            infoNotyf.open({
                type: 'info',
                message: 'Your data is processing.',
                duration: '3000'
            });
        }
    };

    pillsAndroidTab.onclick = function () {
        pillsAndroidTab.classList.remove("unselected-tab");
        pillsIOSTab.classList.add("unselected-tab");
        pillsIOS.classList.remove("show");
        pillsIOS.classList.remove("active");
        pillsAndroid.classList.add("show");
        pillsAndroid.classList.add("active");
    };

    pillsIOSTab.onclick = function () {
        pillsIOSTab.classList.remove("unselected-tab");
        pillsAndroidTab.classList.add("unselected-tab");
        pillsAndroid.classList.remove("active");
        pillsAndroid.classList.remove("show");
        pillsIOS.classList.add("active");
        pillsIOS.classList.add("show");
    };
});
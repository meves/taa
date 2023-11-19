import { AppText } from "../russianText";

export const englishText: AppText = {
    errorBoundary: {
        standardErrorContent: {
            text: "Something went wrong\nPlease try again or check back later.",
            button: "Go to Main"
        }
    },
    header: {
        faq: "F. A. Q.",
        lk: "My account",
        login: "Log in",
        register: "Sign up"
    },
    footer: {
        terms: "User agreement",
        privacy: "Privacy policy"
    },
    homePage: {
        banner: {
            title: {
                improve: "Improve",
                yourSpeaking: " your\nspeaking",
                skills: " skills"
            },
            text: "Describe various objects you see on the screen and improve your thinking."
        },
        summary: {
            descriptionText: {
                paragraphOne: "Lacking words during conversation (interview or public speech), unable to find the right word or"
                    + " even getting stuck, are common problems.",
                paragraphTwo: {
                    recordYourOwnSpeech: "Recording your own speech",
                    trainDialogs: "  and practicing dialogues with family and friends has long been used",
                    lowStressLevel: " to reduce stress",
                    selfConfidence: " before an important performance and increase self-confidence."
                }
            },
            cardText: "You will see an image — it can be a sunset, a couch, or a panda — and your task is to describe"
                + " what you see first from a positive aspect, then from a negative aspect, and finally reach a conclusion."
        },
        study: {
            title: {
                together: "С ",
                you_will: " you will"
            },
            cards: [
                { 
                    id: 1,
                    title: "Talk",
                    text: "TalkAboutAll helps you improve your speaking skills by allowing you to listen to yourself,"
                        + " analyze your speech, and identify areas for improvement such as grammar and vocabulary use."
                },
                { 
                    id: 2,
                    title: "Listen",
                    text: "Hearing yourself from the side, you can calmly analyze what you have heard and evaluate your"
                        + " monologue based on the quality of the words used, the presence of pauses, the speed and any"
                        +  "other way you like."
                },
                { 
                    id: 3,
                    title: "Notice",
                    text: "Watching the video, you will not only assess  your appearance, but also the"
                        + " surroundings. For example, you are preparing for an interview or another important video"
                        + " conference and an ironing board behind your back will not be the best background. Articulation,"
                        + " gestures, eye contact, posture and lighting — there are dozens of little things you can pay"
                        + " attention to."
                },{ 
                    id: 4,
                    title: "Comment",
                    text: "In 24 hours after recording, you can leave a written comment for yourself — praise, evaluation"
                    + " of your progress, notes for the future or a reminder for next time. After all, it is scientifically"
                    + " proven that written or spoken words are better absorbed than spoken words."
                }
            ]
        },
        speech: {
            improve: "Improve",
            your_speech_and_thinking: " your speech and thinking",
            by_yourself: " by yourself",
            under_comfortable_conditions: " under comfortable conditions", 
            right_now: " right now"
        },
        buttons: {
            start: "Let's\u202FStart"
        }
    },
    informationPages: {
        thankForRegistration: {
            title: "Thank you for signing up!",
            text: "A confirmation letter has been sent to your email address. After confirming the account, it will be active.",
            link: "Go to Main"
        },
        notActivated: {
            title: "The activation was not successful.",
            text: "The link has expired.\nPlease register again so we can send you a new link",
            link: "Sign up"
        },
        afterRemoveAccount: {
            title: "We are very sorry that you decided not to use our service.",
            text: "All your data, video and audio files are deleted from our server."
                + "\nWe look forward to your return!",
            link: "Go to Main"
        }
    },
    forms: {
        labels: {
            name: "First name",
            surname: "Last name",
            email: "Email",
            enterEmail: "Enter your email",
            password: "Password",
            newPassword: "New password",
            oldPassword: "Current password",
            submitPassword: "Confirm Password",
            submitNewPassword: "Confirm new password"
        },
        buttons: {
            main: "Go to Main",
            registration: "Sign up",
            login: "Log in",
            logout: "Log out",
            recoverPassword: "Recover\u00A0password",
            save: "Save",
            saveChanges: "Save changes",
            cancel: "Cancel",
            deleteAccount: "Delete my account",
            deletionSubmit: "Confirm"
        },
        tooltips: {
            editPencil: "Edit",
            formTooltipTitle: "Restrictions tooltips",
            titleName: "First Name and Last Name:",
            titleEmail: "Email",
            titlePassword: "Password",
            titleComment: "Comment:",
            tooltipName: "Allowed to contain Russian or English characters, "
                        + "space and dash. Length must be from 1 to 50 characters.",
            tooltipEmail: "English characters, special symbols or digits are allowed. "
                        + "@ is required. Space is not allowed. Enter is not allowed. Maximum length of 254 characters.",
            tooltipPassword: "Allowed to contain English characters, digits or special symbols "
                            + "! - @ # $ % ^ & * / | ( ) { } : ; Length must be from 6 to 50 characters.",
            tooltipComment: `Allowed to contain Russian or English characters, digits or special symbols `
                            + `, . / ( ) * - + = - _ ! " № ; % : ? Length must be less then 600 characters.`
        },
        placeholders: {
            name: "First Name",
            surname: "Last Name",
            email: "Email",
            password: "Password",
            submitPassword: "Confirm password",
        },
        errors: {
            required: "The field is required",
            wrongFirstName: "Invalid first name entered",
            wrongLastName: "Invalid last name entered",
            wrongCredentials: "Invalid password or e-mail entered",
            wrongEmail: "Invalid e-mail entered",
            wrongPassword: "Invalid password entered",
            wrongComment: "Invalid comment entered",
            notConfirmed: "Your email is not verified",
            notYourEmail: "Invalid email address entered"
        },
        registration: {
            legend: "Sign up",
            submitAcquainted: {
                read: "I have read ",
                agreement: "User Agreement",
                and: " and ",
                policy: "Privacy Policy"
            },
            redirectionText: {
                text: "If you are already signed up, go to the",
                moveTo: " Log in",
                page: " page"
            }
        },
        login: {
            legend: "Log in",
            redirectionText: {
                text: "If you are not registered, go to the",
                moveTo: " Sign up",
                page: " page"
            },
            forgetPassword: "Forgot your password?",
            imageAlt: "Log in",
            accountConfirmed: "Your account is confirmed. Thanks!"
        },
        lk: {
            legend: "Personal data",
            edit: "Edit profile",
            watchVideo: `Watch\nmy records`,
            recordVideo: `Let's start recording`,
            redirectionText: {
                password: "Password",
                changePassword: "Change my password"
            }
        },
        forgetPassword: {
            legend: "Forgot your password?"
        },
        newPassword: {
            legend: "New password"
        },
        changePassword: {
            legend: "Password change"
        }
    },
    videos: {
        timer: {
            stayed: "",
            seconds: " seconds to go"
        },
        buttons: {
            goToDescription: "Instaruction",
            startTestRecording: "Start test recording",
            startRecording: "Start recording",
            stopRecording: "Stop recording",
            changeFocus: "Change focus",
            start: "Let's Start",
            stop: "Stop",
            recordingInProgress: "Recording in Progress",
            pause: "Pause",
            watch: "Watch",
            again: "Again",
            done:"Done",
            cancel: "Cancel",
            infoStart: "Go to video recording"
        },
        errorMessage: {
            cameraIsNotPluggedIn: "Camera is not plugged in. Check connection.",
            microphoneIsNotPluggedIn: "Microphone is not plugged in. Check connection.",
            usingOfCameraOrMicrophoneAreNotAllowed: "Permissions to use the camera and microphone have not been granted." +
                "You need to allow the page to access your devices for the demo to work.",
            resolutionNotSupported: {
                resolution: "Resolution ",
                notSupported: " not supported by device."
            }
        },
        test: {
            title: "Test recording lasts no more than 30 seconds,\nit can be stopped at any time for viewing"
        },
        info: {
            title: `Describe the image\nwhile recording a video`,
            description: [
                { id: 1, text: `In two stages of 90 seconds describe the positive and negative item characteristics` },
                { id: 2, text: "Summarize.\nComplete the speech, make a final evaluation." },
                { id: 3, text: "Done earlier, great!\nClick the  \"done\" button to move to the next block." },
                { id: 4, text: "Congratulations! You've recorded a video!\nCome back to check it out in 24 hours." },
                { id: 5, text: "Please note that the video recording is stored on the server for 2 weeks. After that you have access only to the audio recording."},
            ]
        },
        record: {
            category: "Category",
            author: "Author: ",
            described: {
                positive: "Describe the positive aspects",
                negative: "Describe the negative aspects",
                total: "Let's summarize"
            },
            timerText: {
                after: "",
                recordingWillStart: "",
                recordingWillStop: "",
                afterWillStart: "Recording will start in \u00A0",
                afterWillStop: "Recording will stop in \u00A0",
                seconds: "\u00A0 seconds",
            }
        },
        myNotes: {
            title: "My records",
            youHaveNoRecords: "You don't have any records yet",
            imageAlt: "Poster",
            imageTitle: "Watch video",
            caption: {
                audioAvailableOnly: "Only the audio is available",
                videoAvailable: "Video is available for",
                days: "more day(s)"
            },
            sorting: {
                newFirst: "New first",
                oldFirst: "Old first"
            },
            paginator: {
                start: "Start",
                end: "End",
                previous: "Previous",
                next: "Next"
            }
        },
        watchVideo: {
            imageAlt: "Described image",
            imageTitle: "Playback",
            videoNotPlaying: "If the video does not play, please try another browser",
            placeholder: "Type your comment...",
            buttons: {
                myRecords: "My records",
                sendToEmail: "Send to mail",
                saveComment: "Save comment"
            },
            transcriptions: {
                positiveSides: "Positive sides",
                negativeSides: "Negative sides",
                summarize: "Summarize"
            }
        }
    },
    modals: {
        buttons: {
            cancelRecording: "Yes, cancel",
            continueRecording: "No, continue recording",
            goToMain: "Go to Main",
            nextImage: "Next image",
            myAccount: "My account",
            deleteAccout: "Delete\u00A0account",
            cancel: "Cancel",
            login: "Log in",
            acceptCookie: "Accept\u00A0cookie",
            ok: "Ok",
            saveToDevice: "Save to device",
            tryAgain: "Try again",
            save: "Save",
            closeWithoutSaving: "Close without saving",
            close: "Close"
        },
        cancelRecordVideo: {
            title: "Are you sure you want to cancel the recording?",            
            text: "After confirming the cancellation, you will be redirected to the main page. The image will be regenerated."            
        },
        afterFirstVideo: {
            title: "You can watch the video after 24 hours in your account.",
            text: "The video recording will be stored on the server for 2 weeks. After this period,"
                + " an audio recording will be available. In the meantime, we propose to describe two more images."
        },
        afterSecondVideo: {
            title: "You can watch the video nafter 24 hours in your account.",
            text: "The video recording will be stored on the server for 2 weeks. After this period,"
                + " an audio recording will be available. In the meantime, we propose to describe one more images."
        },
        afterThirdVideo: {
            title: "In the basic version of the application, three videos per day are available.",
            text: "The video recording will be stored on the server for 2 weeks. After this period,"
                + " an audio recording will be available. Take a break and come back tomorrow."
        },
        deleteAccountWarning: {
            title: "Deleting an account is irrevocable.",
            text: "After confirming the deletion, all your data, video- and audio files will be completely"
                + " erased from our server without the possibility of recovery. Are you sure you want to delete your account?"
        },
        confirmDeleteAccount: {
            title: "Enter your email to delete your account."
        },
        passwordRecoveryLetterSentToEmail: {
            title: "We have sent an email to this address with a link to reset your password."
        },
        afterPasswordRecovery: {
            title: "Password successfully recovered."
        },
        emailAlreadyRegistered: {
            title: "This e-mail is already registered.",
            text: "Go to the login page."
        },
        cookie: {
            text: "We use 𝗰𝗼𝗼𝗸𝗶𝗲 to collect technical information and process the IP address of your locations."
                + " By continuing to use this site, you consent to the use of 𝗰𝗼𝗼𝗸𝗶𝗲𝘀."
        },
        archiving: {
            title: "The archiving is in progress.",
            success: "An email with the archive will be sent to your email within an hour.",
            error: "Archive not created Please try again."
        },
        saveOrTrySendVideo: {
            title: "Something went wrong. The recording was not sent to the server.",
            text: "This recording will not be available in the personal account."
        },
        passwordSuccessfullyChanged: {
            title: "The password has been successfully changed."
        },
        videoIsSendingToServer: {
            title: "Please wait, the video is being uploaded to the server.",
            text: "Please do not leave the page."
        },
        saveComment: {
            title: "Saving a comment...",
            error: "Comment not saved\nPlease try again."
        }
    },
    errorPages: {
        error_400: {
            title: "Page you are looking for \ndoesn't exist ;(",
            text: "Try another page",
            goToMain: "Go to Main"
        },
        error_500: {
            title: "Oops...",
            text: "An error has occurred and we are working\nto fix the problem. Please try again later.",
            reload: "Reload"
        }
    },
    faqPage: {
        title: "We prepared answers to frequent questions for you",
        faqs: [
            { id: 1, question: "What is the service for?", answer: "Recording your own speeches and practicing dialogues with family or friends are long-used tools that can help you reduce stress and tension before an important speech and increase confidence in your abilities. Such training helps you practice your speech and develop the necessary skills for successful public speaking. Recording your speeches can also help you identify weaknesses and learn how to correct them, to achieve even greater confidence in yourself in future speeches."},
            { id: 2, question: "How do I register?", answer: "You can register by clicking the button in the top right corner or by following the link provided."},
            { id: 3, question: "Profile editing.", answer: "In your personal account, you can change your name, surname, and password."},
            { id: 4, question: "How do I check my camera and microphone?", answer: "Before recording a video, you always have access to test video and audio recording functionality."},
            { id: 5, question: "Can I use the service without a camera?", answer: "Yes, it is possible to use the service without a webcam, in which case only audio recording will take place. We recommend using the service to record videos so that you can prepare for video meetings and not feel uncomfortable during them."},
            { id: 6, question: "Image description.", answer: "The service automatically suggests describing the positive and negative aspects of the image by generating them randomly. The summary is always at the end of the recording."},
            { id: 7, question: "Appearance of images and words.", answer: "Categories, words, and images are generated randomly from a list of words that you have not described before."},
            { id: 8, question: "Video recording: How many attempts can I make per day? How long does video recording last?", answer: "In the basic functionality, it is possible to record up to 3 videos per day with a total duration of 5 minutes."},
            { id: 9, question: "Where can I find my video? How do I watch recorded videos? Can I download videos?", answer: "Access to recorded videos is available 24 hours after recording. You can watch videos in your personal account. Also, on the video page, there is functionality that allows you to download or send the video to the email address specified during registration."},
            { id: 10, question: "Why can I only watch videos after 24 hours?", answer: "Analyzing your actions with a delay is more effective. This allows for a more objective approach to evaluating events and taking into account possible changes or developments that may have occurred between then and now. Also, the time interval may give you the opportunity to calm down and analyze your actions from a distance, which can help avoid emotional reactions or prejudices."},
            { id: 11, question: "How do I delete my account? How do I delete my data?", answer: "You can delete your account in your personal account. When deleting an account, all your data, as well as audio and video files, are completely deleted without the possibility of recovery."},
            { id: 12, question: "How long are videos stored?", answer: "In the basic tariff, videos are stored for 2 weeks from the date of recording, then converted to audio."},
            { id: 13, question: "How long are audio files stored?", answer: "Audio files are stored until your account is deleted."},
            { id: 14, question: "Is it safe? Who can watch my videos?", answer: "All data is stored in an anonymous and encrypted format."},
            { id: 15, question: "Is it free?", answer: "The basic functionality of the service is free. You can familiarize yourself with paid options by following the link."},
            { id: 16, question: "Are there age restrictions?", answer: "The basic functionality of the service has no age restrictions, but paid tariffs require confirmation of age from 18 years old."},
            { id: 17, question: "Problem solving (Technical support)", answer: "For all questions related to the operation of the service, you can contact us by email at mail@talkaboutall.ru"},
            { id: 18, question: "Language switching.", answer: "The service supports two languages: Russian and English. The language switch button is located in the upper right corner."},
            { id: 19, question: "Can comments be edited?", answer: "Comments on videos can be edited at any time."},
            { id: 20, question: "Sorting videos/audio and selective viewing.", answer: "Our application offers a convenient way to store and analyze your video/audio recordings. All recordings are sorted by date in descending order, so you can always quickly find the latest recordings. In addition, we offer the ability to filter recordings by positive and negative traits, making it easy to analyze scenarios with positive or negative outcomes."},
            { id: 21, question: "Link to our rules.", answer: "You can familiarize yourself with the rules of using the service by following the link provided."},
            { id: 22, question: "If your account has been hacked.", answer: "Please contact our support team at mail@talkaboutall.ru."},
            { id: 23, question: "To file a complaint about a privacy violation.", answer: "Please contact our support team at mail@talkaboutall.ru."},
        ]
    },
    privacyPage: {
        updatingDate: "Last updated: Feb 6, 2023",
        title: "Privacy Policy",
        introduction: {
            welcome: "Welcome to ",
            link: "TalkAboutAll",
            platform: " (the «Platform»)",
            text: "We are committed to protecting and respecting your privacy. This policy explains our practices"
                + " concerning the personal data we collect from you, or that you provide to us. If you do not agree with this"
                + "policy, you should not use the Platform.",
            connectUs: "If you have any questions about how we use your personal data, contact us at."
        },
        privacies: [
        { id: "policies", h5level: [
            { id: 1, 
                h5title: `What information do we collect about you?`, 
                text: `We collect and process information you give us when you create an account and upload content to the Platform. This includes technical and behavioural information about your use of the Platform.`},
            { id: 2, 
                h5title: `How will we use the information about you?`,
                text: `We use your information to provide the Platform to you and to improve and administer it. We use your information to, among other things, improve and develop the Platform and ensure your safety. Where appropriate, we will also use your personal information to serve you targeted advertising and promote the Platform.`},
            { id: 3, 
                h5title: `Who do we share your information with?`, 
                text: `We share your data with third party service providers who help us to deliver the Platform, such as cloud storage providers. We also share your information with business partners, content moderation services, measurement providers, advertisers, and analytics providers. Where and when required by law, we will share your information with law enforcement agencies or regulators, and with third parties pursuant to a legally binding court order.`},
            { id: 4, 
                h5title: `How long do we keep your information?`, 
                text: `We retain your information for as long as it is necessary to provide you with the service. Where we do not need your information in order to provide the service to you, we retain it only as long as we have a legitimate business purpose in keeping such data or where we are subject to a legal obligation to retain the data. We will also retain your data if we believe it is or will be necessary for the establishment, exercise or defence of legal claims.` },
            { id: 5, 
                h5title: `How will we notify you of any changes to this Privacy Policy?`, 
                text: `We will generally notify all users of any material changes to this policy through a notice on our Platform. However, you should look at this policy regularly to check for any changes. We will also update the «Last Updated» date at the top of this policy, which reflects the effective date of such policy. By accessing or using the Platform, you acknowledge that you have read this policy and that you understand your rights in relation to your personal data and how we will collect, use and process it.`}
            ] 
        },
        { id: "types", 
          h3title: `The types of personal data we use`, 
          h4title: `We collect and use the following information about you:`,
          h6level: [
            { id: 1, 
              h6title: `Your Profile Information.`,
              text: `You give us information when you register on the Platform, including your username, password, date of birth (where applicable), email address, information you disclose in your user profile, and your photograph or profile video.` },
            { id: 2,
              h6title: `User Content and Behavioural Information.`, 
              text: [  
                `We process the content you generate and view on the Platform, including preferences you set (such as choice of language) photographs, audios and videos you upload or create, comments. We collect User Content through pre-loading at the time of creation, import, or upload, regardless of whether you choose to save or upload that User Content.`,
                `We may collect information about the images and audio that are a part of your User Content, such as identifying the objects and scenery that appear, the existence and location within an image of face and body features and attributes, the nature of the audio, and the text of the words spoken in your User Content. We may access content, including text, images, and video, found in your device’s clipboard, with your permission. For example, if you choose to initiate content sharing with a third- party platform, we access this information stored in your clipboard in order to fulfill your request. Where appropriate, we will also use this information for the purpose of serving personalised advertising and to tell you about new services and opportunities.`
                ] 
            },
            { id: 3,
                h6title: `Information from Third Parties.`,
                text: `You may choose to share certain data with us from third parties or through your use of the Platform, we may collect such third party data automatically. We have set outfurther detail on the information we receive from third parties below:`,
                list: [
                    `Business Partners:\nIf you choose to register or use the Platform using a third-party social network account details or login service, you will provide us or allow to provide us with your username, public profile, and other possible information related to such account. We will likewise share certain information with your social network such as your app ID, access token and the referring URL. If you link your account to another service, we may receive information about your use of that service.`, 
                    `Advertisers, Advertising Networks, and Analytic Providers:\nWe use the information collected from you, and your interaction with the Platform and other third-party sites and Apps, to infer your likely interests to provide you with more relevant advertising. This information tells us about websites you've visited, apps you've downloaded and purchases you have made so that we can predict what else might interest you in the future and assess how effective the advertising on our Platform is. We collect this information by the use of Cookies and similar technologies on our Platform and from similar information received from third parties who advertise on our Platform and whose sites/apps you visit.`
                ]

            },
            { id: 4, 
              h6title: `Technical Information we collect about you.`,
              text: `We collect certain information about the device you use to access the Platform, such as your IP address, user agent, mobile carrier, time zone settings, identifiers for advertising purposes, model of your device, the device system, network type, device IDs, your screen resolution and operating system, app and file names and types, keystroke patterns or rhythms, battery state, audio settings and connected audio devices. Where you log-in from multiple devices, we will be able to use your profile information to identify your activity across devices. We may also associate you with information collected from devices other than those you use to log-in to the Platform.` 
            },
            { id: 5,
                h6title: `Location.`,
                text: `We collect information about your approximate location, including location information based on your SIM card and/or IP address. With your permission, we may also collect precise location data (such as GPS).`
            },
            { id: 6,
                h6title: `In-App purchases.`,
                text: `If you reside in certain jurisdictions that offer in-app purchases, please note the provisions of our Virtual Items Policy. Your purchase will be made via your Apple iTunes or Google Play account. We do not collect any financial or billing information from you in relation to such a transaction. Please review the relevant app store's terms and notices in respect of the handling of such data. So that we can credit your account with the correct value, we keep a record of the purchases you make, the time at which you make those purchases and the amount spent. In addition to in-app purchases, if you choose to make other payment related transactions the Platform may collect payment information, including payment card numbers or other third-party payment information (such as PayPal) where required for the purpose of payment.`
            }    
            ]},
            
        { id: "cookies", 
          h3title: `Cookies`,
          text: [
            `We and our vendors and service providers use cookies and other similar technologies (e.g., web beacons, flash cookies, etc.) (“Cookies”) to automatically collect information, measure and analyze which web pages you click on and how you use the Platform, enhance your experience using the Platform, improve our services, and provide you with targeted advertising on the Platform and elsewhere across your devices. Cookies enable the Platform to provide certain features and functionality. Web beacons are very small images or small pieces of data embedded in images, also known as “pixel tags” or “clear GIFs,” that can recognize Cookies, the time and date a page is viewed, a description of the page where the pixel tag is placed, and similar information from your computer or device.`,
            `By using the Platform, you consent to our use of Cookies.`,
            `Additionally, we allow our business partners, advertising networks, and other advertising vendors and service providers (including analytics vendors and service providers) to collect information about your  online activities through Cookies. We link your contact or subscriber information with your activity on our Platform across your devices, using your email or other log-in or device information. These third parties may use this information to display advertisements on our Platform and elsewhere online tailored to your interests, preferences, and characteristics. We are not responsible for the privacy practices of these third parties, and the information practices of these third parties are not covered by this Privacy Policy.`,
            `You are able to refuse or disable Cookies by adjusting your browser settings. Because each browser is different, please consult the instructions provided by your browser. Please note that you may need to take additional steps to refuse or disable certain types of Cookies. For example, due to differences in how browsers and mobile apps function, you may need to take different steps to opt out of Cookies used for targeted advertising in a browser and to opt out of targeted advertising for a mobile application, which you may control through your device settings or mobile app permissions. In addition, your opt-out selection is specific to the particular browser or device that you are using when you opt out, so you may need to opt-out separately for each of browser or device. If you choose to refuse, disable, or delete Cookies, some of the functionality of the Platform may no longer be available to you.`
            ] 
        },
        { id: "dataUsing",
          h3title: `How we use your personal data`,
          text: [`We will use the information we collect about you in the following ways:`],
          list: [
            `notify you about changes to our service`,
            `provide you with user support`,
            `enable you to share User Content and interact with other users`,
            `enable you to participate in the virtual items program`,
            `communicate with you`,
            `to help us detect and combat abuse, harmful activity, fraud, spam, and illegal activity on the Platform`,
            `ensure your safety and security including reviewing user content, messages and associated metadata for breach of our Community Guidelines and other inappropriate content`,
            `ensure content is presented in the most effective manner for you and your device`,
            `improve, promote and develop the Platform and promote popular topics, hashtags and campaigns on the Platform`,
            `carry out data analysis and test the Platform to ensure its stability and security`,
            `allow you to participate in interactive features of the Platform`,
            `provide you with personalised advertising`,
            `provide you with location-based services (where those services are available in your jurisdiction)`,
            `to inform our algorithms`,
            `enforce our terms, conditions and policies`,
            `administer the Platform including troubleshooting`,
            `and to facilitate sales, promotion, and purchase of goods and services and to provide user support.`
        ]},
        { id: "thirdParties",
          h3title: `How we share your personal data`,
          h4title: `We share your data with the following selected third parties:`,
          h6level: [
            { id: 1, 
              h6title: `Business Partners`,
              text: [
                `If you choose to register to use the Platform using your social network account details, you will provide us or allow your social network to provide us with your phone number, email address, username and public profile. We will likewise share certain information with the relevant social network such as your app ID, access token and the referring URL. If you choose to allow a third-party service to access your account, we will share certain information about you with the third party. Depending on the permissions you grant, the third party may be able to obtain your account information and other information you choose to provide.`,
                `Where you opt to share content on social media platforms, the video, username and accompanying text will be shared on that platform or, in the case of sharing via instant messaging platforms such as Whatsapp, a link to the content will be shared.`
              ]
            },
            { id: 2, 
              h6title: `Payment Providers`,
              text: `If you choose to Buy or conduct other payment related transactions, we will share data with the relevant payment provider to facilitate this transaction. For transactions, we share a transaction ID to enable us to identify you and credit your account with the correct value in coins once you have made the payment.`
            },
            { id: 3, 
              h6title: `Service Providers`, 
              text: `We provide information and content to service providers who support our business, such as cloud service providers and providers of content moderation services to ensure that the Platform is a safe and enjoyable place and service providers that assist us in marketing the Platform.` 
            },
            { id: 4, 
              h6title: `Analytics providers`, 
              text: `We use analytics providers to help us in the optimisation and improvement of the Platform.\nOur third-party analytics providers also help us to serve targeted adverts.`
            },
            { id: 5,
              h6title: `Advertisers and Advertising Networks`,
              text: `We share information with advertisers and third-party measurement companies to show how many and which users of the Platform have viewed or clicked on an advertisement. We share your device ID with measurement companies so that we can link your activity on the Platform with your activity on other websites; we then use this information to show you adverts which may be of interest to you.`
            },              
            { id: 6, 
              h6title: `Law Enforcement`, 
              text: `We will share your information with law enforcement agencies, public authorities or other organisations if legally required to do so, or if such use is reasonably necessary to:`,
              list: [
                    `comply with legal obligation, process or request`,
                    `enforce our Terms of Service and other agreements, policies, and standards, including investigation of any potential violation thereof`,
                    `detect, prevent or otherwise address security, fraud or technical issues`,
                    `or protect the rights, property or safety of us, our users, a third party or the public as required or permitted by law (including exchanging information with other companies and organisations for the purposes of fraud protection and credit risk reduction).`
                ]
            },
            { id: 7, 
              h6title: `Public Profiles`, 
              text: `Please note that if your profile is public, your content will be visible to anyone on the Platform and may also be accessed as well as third parties such as search engines, content aggregators and news sites.` 
            },
            { id: 8, 
              h6title: `Sale or Merge`, 
              text: `We will also disclose your information to third parties:`, 
              list: [
                `in the event that we sell or buy any business or assets (whether a result of liquidation, bankruptcy or otherwise), in which case we will disclose your data to the prospective seller or buyer of such business or assets;`,
                `if we sell, buy, merge, are acquired by, or partner with other companies or businesses, or sell some or all of our assets. In such transactions, user information may be among the transferred assets.`                
              ]  
            } 
        ]},
    
        { id: "where", 
          h3title: `Where we store your personal data`, 
          text: [`The personal data we collect from you may be stored on a server located in Russia.`] 
        }, 
        { id: "rights", 
          h3title: `Your Rights and Choices`, 
          text: [
            `You can access and edit most of your profile information by signing. Should you choose to do so, you may delete your entire account in Settings. You may also be afforded certain rights under applicable laws, which may include the right to access, delete, update, or rectify your data, to be informed of the processing of your data, to file complaints with authorities, and potentially other rights. If you have any questions on how to use the above tools, want to know about what rights you may have or want to exercise them, or have any requests, inquiries, or complaints, please contact us.`
        ]        },
        { id: "security", 
          h3title: `The security of your personal data`, 
          text: [
            `We take steps to ensure that your information is treated securely and in accordance with this policy. Unfortunately, the transmission of information via the internet is not completely secure. Although we will protect your personal data, for example, by encryption, we cannot guarantee the security of your information transmitted via the Platform; any transmission is at your own risk.`, 
            `We have appropriate technical and organizational measures to ensure a level of security appropriate to the risk of varying likelihood and severity for the rights and freedoms of you and other users. We maintain these technical and organizational measures and will amend them from time to time to improve the overall security of our systems.`, 
            `We will, from time to time, include links to and from the websites of our partner networks, advertisers and affiliates. If you follow a link to any of these websites, please note that these websites have their own privacy policies and that we do not accept any responsibility or liability for these policies. Please check these policies before you submit any information to these websites.`
          ]
        },
        { id: "time", 
          h3title: `How long we keep your personal data`, 
          text: [
            `We retain your information for as long as it is necessary, for example, to comply with our contractual relationship or to provide you with our service. Where we do not need your information in order to provide the service to you, we retain it only for so long as we have a legitimate business purpose in keeping such data, as may be allowed by applicable laws. However, there are occasions where we are likely to keep this data for longer in accordance with our legal obligations or where it is necessary for the establishment, exercise or defense of legal claims.`, 
            `After you have terminated your use of our Platform, we store your information in an aggregated and anonymized format.`
          ]
        },
        { id: "changes", 
          h3title: `Changes`,
          text: [
            `We may update this Privacy Policy from time to time. When we update the Privacy Policy, we will notify you by updating the «Last Updated» date at the top of this policy and posting the new Privacy Policy and providing any other notice required by applicable law. Your continued access to or use of the Platform after the date of the updated policy constitutes your acceptance of the updated policy. If you do not agree to the updated policy, you must stop accessing or using the Platform.`
        ]
        }
    ]
    },
    termsPage: {
        updatingDate: "Last update: March 2023",
        title: "User Agreement",
        subtitle: "1. Your relationship with us",
        introduction: {
            welcome: "Welcome to ",
            link: "TalkAboutAll",
            platform: "(\"Platform\").",
            texts: [
                "You are reading the user agreement (hereinafter - \"User Agreement\"), which regulates the relationship"
                + " between you and the Platform and sets the conditions under which you can access and use the Platform,"
                + " our websites, services, applications, products, and content (together \"Services\", \"Services\")."
                + " Our Services are provided for private, non-commercial use. For the purposes of this Agreement, \"you\" and"
                + " \"your\" mean you as a user of the Services.", 
                "This User Agreement is a legally binding agreement between us. Please read it carefully."
            ]
        },
        terms: [
            {
                id: "acceptance",
                h3title: "2.  Acceptance of the User Agreement",
                text: [
                    "By accessing our Services or using them, you confirm that you are entering into a legally binding"
                    + " agreement with TalkAboutAll, accept this User Agreement and undertake to comply with it."
                    + " Your access to the services and their use is also regulated by our Privacy Policy and Community Rules,"
                    + " the terms of which can be found directly on the Platform. By using the Services, you agree"
                    + " to the terms of the Privacy Policy.",
                    "If you access or use the Services within a jurisdiction for which special additional conditions apply,"
                    + " you also agree to such additional conditions applicable to users in each jurisdiction, as set out below,"
                    + " and in the event of a conflict between the provisions of the Additional Conditions - For a Specific"
                    + " Jurisdiction, which relate to the jurisdiction in which you access or use the services, and the rest"
                    + " of this Agreement, the relevant Additional Conditions - For a Specific Jurisdiction will apply. If you"
                    + " do not agree with these Terms, you should not access or use our Services.",
                    "If you access or use the Services on behalf of a company or organization, then (a) \"you\" and \"your\" mean"
                    + " the legal entity or organization, (b) you guarantee that you are an authorized representative of the"
                    + " legal entity or organization, having the authority to accept the terms of this user agreement and agree"
                    + " to them on its behalf, and (c) your legal entity or organization bears legal and financial responsibility"
                    + " for accessing or using our services, as well as for accessing or using your account by other persons"
                    + " associated with your organization, including employees, agents or contractors. You accept the Terms"
                    + " of this User Agreement by accessing our Services or using them. You understand and agree that from this"
                    + " moment we will consider your access to our services or their use as acceptance of the terms of this User"
                    + " Agreement. You need to print or save a local copy of the user agreement for yourself."
                ]
            },
            {
                id: "changes",
                h3title: "3. Changes to the User Agreement",
                text: [
                    "From time to time, we make changes to the User Agreement, for example, when we update the functionality"
                    + " of our Services or combine several applications or services managed by us or our affiliates into one"
                    + " combined service or application, or when changes occur in legislation. We will make commercially"
                    + " reasonable efforts to notify all users of any significant changes to this user agreement, for example,"
                    + " through notifications on our Platform. However, you should regularly review the User Agreement to check"
                    + " for such changes. We will also update the \"Last Update\" date at the top of this user agreement, which"
                    + " reflects the date of entry into force of the relevant changes to the User Agreement. Continued access"
                    + " or use of services after the date of the new version of the User Agreement means your agreement with"
                    + " it. If you do not agree with the new version of the user agreement, you should stop accessing our"
                    + " services or using them."
                ]
            },
            {
                id: "yourAccount",
                h3title: "4. Your Account",
                text: [
                    "To access or use some of our Services, you must create an account. When creating this account, you need"
                    + " to provide accurate and current information. It is important that you update your data and any other"
                    + " information you provide to us in a timely manner to keep it current and complete.",
                    " It is also important that the password for your account is confidential and that you do not disclose"
                    + " it to third parties. If you know or suspect that someone knows your password or has access to your"
                    + " account, you should notify us immediately. You agree that you are solely responsible (to us and others)"
                    + " for actions that occur under your account.",
                    "We reserve the right to disable a user's account at any time, including if you do not comply with any"
                    + " of the provisions of this User Agreement, or if actions taken with your account, at our discretion,"
                    + " cause or may cause harm or degrade the quality of services or infringe or violate the rights of third"
                    + " parties, or violate any laws or rules. If you no longer want to use our Services and want to delete"
                    + " your account, please contact us at. We will assist you and provide instructions on how to delete your"
                    + " account. If you decide to delete your account, you will not be able to reactivate it and access the"
                    + " content or information you added."
                ]
            },
            {
                id: "yourAccess",
                h3title: "5. Your Access to Our Services and Their Use",
                text: [
                    "Your access to services and their use is governed by this User Agreement and all applicable laws"
                    + " and rules. You cannot:",
                    "• access our Services or use them if you are not fully capable of accepting this User Agreement;",
                    "• make unauthorized copies, modify, adapt, translate, redesign, decompile, or create any derivative"
                    + " works based on our Services or any materials, including any files, tables, or documentation (or"
                    + " part thereof), or attempt to recover the source code, algorithms, methods, or techniques used in"
                    + " our services or derived from them; distribute, license, transfer, or sell, in whole or in part, any"
                    + " of our Services or any derivatives thereof;",
                    "• sell, rent, or lease our Services for a fee or use our Services for advertising or performing any"
                    + " commercial actions;",
                    "• use the Services without our written consent for commercial or other unauthorized purposes, including"
                    + " for the distribution or promotion of any commercial advertising, imposition of services, and spamming;"
                    + " interfere or attempt to interfere with the operation of our Services, disrupt the operation of our"
                    + " website or any networks associated with the Services we provide, or bypass any measures that we may"
                    + " use to prevent or restrict access to our Services;",
                    "• include our Services or any part thereof in any other program or product. In this case, we reserve"
                    + " the right to refuse to provide Services, block an account, or restrict access to Services at our"
                    + " discretion;",
                    "• use automated scripts to collect information or otherwise interact with our Services;",
                    "• impersonate any physical or legal person, or falsely represent or otherwise distort information about"
                    + " yourself or your relationship with any physical or legal person, including creating the impression"
                    + " that any content that you upload, post, transmit, distribute, or otherwise make available, originates"
                    + " from our Services;",
                    "• intimidate or harass other users of our services, or promote explicit sexual materials, violence,"
                    + " or discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age;",
                    "• use or attempt to use someone else's account, service, or system without TalkAboutAll's permission or"
                    + " create a false identity using our Services; use our Services to upload, transmit, distribute, store,"
                    + " or otherwise provide access to: files containing viruses, Trojans, worms, logic bombs, or other malicious"
                    + " or technologically harmful materials; any unwanted or unauthorized advertising, imposition of services,"
                    + " promotional materials, \"spam\", \"chain letters\", \"pyramid schemes\" or any other prohibited forms of"
                    + " imposition of services; any third party's personal information, including addresses, phone numbers,"
                    + " email addresses, numbers and details of identity documents (for example, social security numbers,"
                    + " passport numbers) or credit card numbers; any material that violates or may violate any copyrights,"
                    + " trademark rights or other intellectual property rights or privacy rights of any other person; any"
                    + " material that is defamatory to another person, indecent, offensive, pornographic, hateful, or inciting;"
                    + " any material that would constitute, encourage or give instructions for committing a crime, dangerous"
                    + " activities or self-harm; any material that is intentionally designed to provoke or elicit a hostile"
                    + " reaction from people, especially trolling and mockery, or intended to persecute, harm, intimidate,"
                    + " cause suffering to people; any material containing threats of any kind, including threats of physical"
                    + " violence; any material that is racist or discriminatory, including discrimination based on race,"
                    + " religion, age, sex, disability, or sexual orientation;",
                    "• any responses, comments, opinions, analysis, or recommendations that you do not have the right to"
                    + " provide or are not sufficiently qualified to do so;",
                    "• or material that, in the opinion of TalkAboutAll, is unacceptable or restricts or prevents other persons"
                    + " from using our services, or which may cause harm to TalkAboutAll and users or financial liability to"
                    + " TalkAboutAll and users.",
                    " In addition to the above, your access to the Services and their use must always comply with the Community Rules.",
                    "We reserve the right, at any time and without prior notice, to delete or disable access to content"
                    + " at our discretion for any reason or no reason. Some of the reasons why we may delete or disable"
                    + " access to content may include recognizing content as unwanted or violating this User Agreement,"
                    + " Community Rules, or otherwise harmful to the services we provide or to our users. Our automated"
                    + " systems analyze your content to provide you with personalized services, such as optimized personalized"
                    + " advertising, spam detection, and malware. This analysis is performed as content is sent, received, and"
                    + " stored."
                ]
            },
            {
                id: "intellectualProperty",
                h3title: "6. Intellectual Property",
                text: [
                    "We respect intellectual property rights and ask you to do the same. As a condition of your access"
                    + " to the Services and their use, you agree not to use the Services to infringe any intellectual property"
                    + " rights. We reserve the right, without notice, at any time and at our discretion, to block access and/or"
                    + " delete the account of any user who infringes, or is presumed to infringe, copyrights or other intellectual"
                    + " property rights."
                ]
            },
            {
                id: "content",
                h3title: "7. Content",
                subTerms: [
                    {
                        id: "A_Content",
                        titleOne: "A. TalkAboutAll ",
                        text: [
                            "All content, software, images, text, graphic images, illustrations, logos, patents, trademarks,"
                            + " service marks, copyright materials, photographs, audio, video, music, the look and feel of"
                            + " the services, and all intellectual property rights related thereto (“TalkAboutAll content”),"
                            + " are owned by or licensed to TalkAboutAll, while we understand that you or your licensors will"
                            + " have rights to any User Content (as defined below) that you upload or transmit through our"
                            + " Services. Use of TalkAboutAll content or materials on the services for any purposes not"
                            + " expressly permitted by this User Agreement is strictly prohibited. Such materials may not"
                            + " be copied, reproduced, distributed, transmitted, broadcast, displayed, sold, licensed, or"
                            + " otherwise exploited for any purposes without our consent or the prior written consent of our"
                            + " licensors. We and our licensors reserve all rights in relation to our content.",
                            "You acknowledge and agree that we may generate revenues, enhance our brand or otherwise"
                            + " increase the value of our company as a result of your use of our Services, including but not"
                            + " limited to, through the sale of advertising, sponsorships, promotions, data usage, and except"
                            + " as specifically permitted in this User Agreement, or in other agreements you enter into with"
                            + " us, you will have no rights to share in our revenues or any other material or non-material"
                            + " benefits. You also acknowledge that, except as specifically provided for in this User Agreement"
                            + " or another agreement you enter into with us, you (i) have no rights to receive any income or"
                            + " other compensation from any User Content (definition provided below) or the use of any musical"
                            + " works, sound recordings, and audiovisual clips made available to you on the site or through our"
                            + " services, including in any User Content created by you, and (ii) are prohibited from exercising"
                            + " any rights to receive monetary compensation or derive benefits from any User Content within our"
                            + " services or through third-party services (for example, you cannot claim User Content that has"
                            + " been uploaded to the YouTube platform for monetization).",
                            "In accordance with the terms of this User Agreement, you are granted a non-exclusive, limited,"
                            + " non-transferable, non-sublicensable, revocable right, not limited by territorial boundaries,"
                            + " to access and use our Services, including downloading the Platform on a compatible device, and"
                            + " access to TalkAboutAll content solely for your personal, non-commercial use during the course"
                            + " of using our Services, and exclusively in accordance with this User Agreement. TalkAboutAll"
                            + " reserves all rights not expressly granted by this User Agreement in relation to the services"
                            + " and TalkAboutAll Content. You acknowledge and agree that TalkAboutAll may terminate this license"
                            + " at any time for any reason or no reason. NO RIGHTS ARE GRANTED UNDER LICENSE IN RELATION TO"
                            + " SOUND RECORDINGS AND MUSICAL WORKS ACCESSIBLE THROUGH OUR SERVICES THAT ARE CONTAINED THEREIN.",
                            "You acknowledge and agree that when viewing content provided by other users, you do so at your"
                            + " own risk. Content within our Services is provided for general information only. It is not"
                            + " information that you can rely on unequivocally. You should seek professional advice before"
                            + " taking or refraining from any action based solely on the content obtained through our Services.",
                            "We make no representations or warranties, express or implied, that any TalkAboutAll content"
                            + " (including User Content) is accurate, complete, or up-to-date. If our Services contain links"
                            + " to other sites and resources provided by third parties, these links are provided for your"
                            + " information only. We have no control over the contents of those sites or resources. Such links"
                            + " should not be interpreted as approval by us of those linked websites or information you may"
                            + " obtain from them. You acknowledge that we are under no obligation to monitor, control, review,"
                            + " and edit any content posted by you and other service users (including User Content)."
                        ]
                    },
                    {
                        id: "B_User_Conten",
                        titleOne: "B. User Content",
                        text: [
                            "Users of our Services may be allowed to upload, post or transmit (e.g., through streaming"
                            + " services) or otherwise make available content through our services, including without"
                            + " limitation any text, photographs, user videos, sound recordings, and musical works used"
                            + " therein, including videos that incorporate locally stored sound recordings from your personal"
                            + " music library and other sounds (hereinafter “User Content”). Information and materials within"
                            + " the User Content, including User Content that incorporates TalkAboutAll Elements, are not"
                            + " checked or endorsed by us. Opinions expressed by other users in relation to the Services do"
                            + " not reflect our views and values.",
                            "Whenever you access or use features that allow you to upload or transmit User Content through"
                            + " our Services, or interact with other users of our Services, you must comply with the standards"
                            + " set out in the section “Your Access to our Services and their Use” above. You may also upload"
                            + " or transmit your User Content, including User Content with TalkAboutAll Elements, to third-party"
                            + " websites or platforms. If you choose to do so, you must comply with their content guidelines"
                            + " as well as the standards set out in the section “Your Access to our Services and their Use”"
                            + " above. You warrant that any such content will comply with those standards, and you will be"
                            + " liable to us and indemnify us for any breach of that warranty. This means that you will be"
                            + " responsible for any loss or damage we suffer as a result of your breach of these warranties.",
                            "Any User Content will be considered non-confidential and not proprietary. You must not post any"
                            + " User Content through the Services provided by us or transmit to us any User Content that you"
                            + " consider to be confidential or proprietary. When you submit User Content using our Services,"
                            + " you agree and warrant that you own this User Content, or you have obtained all necessary"
                            + " permissions from the rights holder of any part of the content to upload it using our Services,"
                            + " to third-party platforms, and/or adapt third-party content.",
                            "You or the owner of your User Content own the copyrights to the User Content submitted to us,"
                            + " but by posting User Content through the use of our Services, you hereby grant us an"
                            + " unconditional, irrevocable, non-exclusive, royalty-free, transferable, perpetual license,"
                            + " which is not limited by territorial boundaries, to use, modify, adapt, reproduce, create"
                            + " derivative works, publish and/or transmit, and/or distribute, and to allow other users of"
                            + " our Services and other third parties to view, access, use, download, modify, adapt, reproduce,"
                            + " create derivative works, publish and/or transmit your User Content in any format and on any"
                            + " platform, known at this time or invented in the future.",
                            "You also grant us a royalty-free license to use your username, image, voice, and likeness to"
                            + " identify you as the source of any of your User Content. For the avoidance of doubt, the"
                            + " rights granted in the preceding paragraphs of this Section include, among other things, the"
                            + " right to reproduce phonograms (and the mechanical reproduction of musical works embodied in"
                            + " such phonograms), as well as the right to publicly perform and make available phonograms"
                            + " (and the musical works embodied therein) on a royalty-free basis. This means that you grant"
                            + " us the right to use your content without the obligation to pay royalties to third parties,"
                            + " including, but not limited to, phonogram rights holders (e.g., record labels), musical work"
                            + " rights holders (e.g., music publishers), copyright management organizations, any unions or"
                            + " guilds, and technical staff, producers, or other participants involved in the creation"
                            + " of user content."
                        ]
                    },
                    {
                        id: "audience",
                        titleOne: "\"Through-To-The-Audience\" Rights.",
                        text: [
                            "All rights granted by you through the User Content in this User Agreement are granted on a"
                            + " “through-to-the-audience” basis, meaning that the owners or operators of third-party"
                            + " services are not liable to you or any third party for the user content that is posted and/or"
                            + " used on such third-party platforms via our services."
                        ]
                    },
                    {
                        id: "refuse",
                        titleOne: "Waiver of Rights to User Content.",
                        text: [
                            "By posting User Content on or through our Services, you waive any rights to pre-screening"
                            + " or approval of any marketing or promotional materials associated with such User Content."
                            + " You also waive any rights to privacy, publicity, and any other similar rights in connection"
                            + " with your User Content or any part thereof. You hereby waive any and all moral rights to the"
                            + " extent that any moral rights cannot be assigned or licensed, and agree not to assert them,"
                            + " nor to maintain, bring or permit the bringing of any claims based on any moral rights that"
                            + " you may have in respect of any User Content posted by you on or through our Services.",
                            "We also have the right to disclose your identity to any third party who claims that your User"
                            + " Content, posted or uploaded by you to our Services, constitutes an infringement of their"
                            + " intellectual property rights or their right to privacy.",
                            "We or third parties authorized by us reserve the right to refuse the publication of your content"
                            + " at our own discretion or at the discretion of such third parties. We have the right to delete,"
                            + " ban, block or remove any post that you make on our Services if, in our opinion, your post does"
                            + " not comply with the content standards set out in the “Your Access to and Use of Our Services”"
                            + " section above. In addition, we have the right - but are not obliged - at our sole discretion"
                            + " to remove, ban, block or delete any User Content (i) that we believe violates this User Agreement,"
                            + " or (ii) in response to complaints from other users or third parties, with or without notice and"
                            + " without any liability to you. In this regard, it is recommended to keep copies of any User"
                            + " Content posted through our Services on personal devices if you need to ensure permanent access"
                            + " to copies of such User Content. We do not guarantee the accuracy, completeness, appropriateness"
                            + " or quality of any user content, and under no circumstances will we be liable for any User Content.",
                            "You control whether your User Content will be publicly available to all other users or will only"
                            + " be accessible to users that you choose. To restrict access to your User Content, you must select"
                            + " the appropriate privacy settings available on the Platform.",
                            "We bear no liability with respect to any content submitted by users and published by us or by"
                            + " authorized third parties.",
                            "If you believe that content uploaded by other users violates our Community Guidelines, please contact us.",
                            "TalkAboutAll takes reasonable measures to promptly remove any content that violates our rules."
                            + " According to TalkAboutAll's policy, under appropriate circumstances and at our discretion,"
                            + " we may disable or delete the accounts of users who repeatedly infringe upon the copyrights or"
                            + " other intellectual property rights of others.",
                            "While our employees are constantly working on developing and evaluating our own products and"
                            + " features, we take pride in paying close attention to the feedback, comments, and suggestions"
                            + " that we receive from our users. If you have decided to contribute by sending us or our employees"
                            + " any ideas, products, services, features, modifications, improvements, content, enhancements,"
                            + " technologies, suggestions (for example, audio, video, games, or other types of content),"
                            + " promotions, strategies, names for new products, or any accompanying documentation, works of"
                            + " art, computer codes, diagrams, and other materials (hereinafter \"Suggestions\"), then regardless"
                            + " of how further discussion of your suggestions will be carried out, the following terms will"
                            + " apply to avoid misunderstandings in the future. Accordingly, by submitting a suggestion to us,"
                            + " you agree that:",
                            "i. TalkAboutAll is not obligated to review, consider, or implement your Suggestions, or to return"
                            + " to you all or part of any Suggestions for any reason;",
                            "ii. Suggestions are provided on a non-confidential basis, and we are not obligated to maintain"
                            + " the confidentiality of the suggestions you send or refrain from using or disclosing them in"
                            + " any way; and",
                            "iii. You unconditionally grant us perpetual and unlimited rights to reproduce, distribute,"
                            + " create derivative works, modify, publicly perform (including on a “through-to-the-audience”"
                            + " basis), make publicly known, publish, and otherwise use your suggestions and their derivatives"
                            + " for any purpose and without restrictions, free of charge and without attribution, including"
                            + " by creating, using, selling, offering for sale, importing, and promoting commercial goods and"
                            + " services that incorporate or embody your suggestions, in whole or in part, in the form initially"
                            + " submitted or as modified."
                        ]
                    }
                ]
            },
            {
                id: "indemnification",
                h3title: "8.Indemnification",
                text: [
                    "You agree to defend, indemnify, and hold harmless TalkAboutAll, its parent, subsidiaries and"
                    + " affiliated companies, and each of their respective officers, directors, employees, agents, and"
                    + " consultants, and release them from all claims, liabilities, costs, and expenses, including but not"
                    + " limited to, legal fees and expenses, arising from or in connection with your or any user’s breach"
                    + " of this user agreement, or arising from or in connection with the breach of obligations,"
                    + " representations, and warranties under this User Agreement."
                ]
            },
            {
                id: "exclusion",
                h3title: "9. EXCLUSION FOR STATUTORY WARRANTIES",
                text: [
                    "NOTHING IN THIS AGREEMENT AFFECTS ANY LEGAL RIGHTS THAT YOU CANNOT CONTRACTUALLY ALTER OR WAIVE"
                    + " AND ARE LEGALLY ALWAYS ENTITLED TO AS A CONSUMER.",
                    "THE SERVICES ARE PROVIDED “AS IS”, AND WE DO NOT GIVE YOU ANY WARRANTIES OR ASSURANCES REGARDING"
                    + " THEM. SPECIFICALLY, WE DO NOT REPRESENT OR WARRANT TO YOU THAT:",
                    "• YOUR USE OF THE SERVICES WILL MEET YOUR REQUIREMENTS;",
                    "• YOUR USE OF THE SERVICES WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE;",
                    "• ANY INFORMATION YOU OBTAIN AS A RESULT OF YOUR USE OF THE SERVICES WILL BE ACCURATE OR RELIABLE;",
                    "• AND DEFECTS IN THE OPERATION OR FUNCTIONALITY OF ANY SOFTWARE PROVIDED TO YOU AS PART OF THE"
                    + " SERVICES WILL BE CORRECTED.",
                    "NO CONDITIONS, WARRANTIES OR OTHER TERMS (INCLUDING ANY IMPLIED TERMS AS TO SATISFACTORY QUALITY,"
                    + " FITNESS FOR PURPOSE OR CONFORMANCE WITH DESCRIPTION) APPLY TO OUR SERVICES EXCEPT WHERE THEY"
                    + " ARE EXPRESSLY SET OUT IN THE AGREEMENT. WE MAY ALTER, SUSPEND, WITHDRAW OR RESTRICT ACCESS TO"
                    + " ALL OR ANY PART OF OUR PLATFORM FOR BUSINESS AND OPERATIONAL REASONS AT ANY TIME WITHOUT PRIOR NOTICE."
                ]
            },
            {
                id: "limitation",
                h3title: "10. LIMITATION OF LIABILITY",
                text: [
                    "NOTHING IN THIS AGREEMENT EXCLUDES OR LIMITS OUR LIABILITY FOR LOSSES WHICH CANNOT BE LAWFULLY"
                    + " EXCLUDED OR LIMITED BY APPLICABLE LAW. THIS INCLUDES LIABILITY FOR DEATH OR PERSONAL INJURY CAUSED"
                    + " BY OUR NEGLIGENCE OR THE NEGLIGENCE OF OUR EMPLOYEES, AGENTS, OR SUBCONTRACTORS, AND FOR FRAUD OR"
                    + " FRAUDULENT MISREPRESENTATION.",
                    "IN ACCORDANCE WITH THE ABOVE, WE ARE NOT LIABLE TO YOU FOR:",
                    "(I) ANY LOSS OF PROFIT (WHETHER INCURRED DIRECTLY OR INDIRECTLY);\n"
                    + "(II) ANY LOSS OF GOODWILL OR BUSINESS REPUTATION;\n"
                    + "(III) ANY LOSS OF OPPORTUNITY;\n"
                    + "(IV) ANY LOSS OF DATA SUFFERED BY YOU; OR\n"
                    + "(V) ANY INDIRECT OR CONSEQUENTIAL LOSSES THAT MAY BE INCURRED BY YOU. ANY OTHER LOSSES WILL BE"
                    + " LIMITED TO THE AMOUNT PAID BY YOU TO TalkAboutAll OVER THE LAST 12 MONTHS.",
                    "ANY LOSSES OR DAMAGES THAT YOU MAY INCUR AS A RESULT OF:",
                    "• TRUST THAT YOU PLACE IN THE COMPLETENESS, ACCURACY, OR EXISTENCE OF ANY ADVERTISING, OR AS A RESULT"
                    + " OF ANY RELATIONSHIP OR TRANSACTION BETWEEN YOU AND ANY ADVERTISER OR SPONSOR WHOSE ADVERTISING"
                    + " APPEARS ON OUR SERVICE;",
                    "• ANY CHANGES THAT WE MAY MAKE TO THE SERVICES, OR FOR ANY PERMANENT OR TEMPORARY CESSATION IN THE"
                    + " PROVISION OF THE SERVICES (OR ANY FEATURES WITHIN THE SERVICES);",
                    "• DELETION OF, CORRUPTION OF, OR FAILURE TO STORE ANY CONTENT AND OTHER COMMUNICATIONS DATA MAINTAINED"
                    + " OR TRANSMITTED BY OR THROUGH YOUR USE OF OUR SERVICES;",
                    "• YOUR FAILURE TO PROVIDE US WITH ACCURATE ACCOUNT INFORMATION;",
                    "• YOUR FAILURE TO KEEP YOUR PASSWORD OR ACCOUNT DETAILS SECURE AND CONFIDENTIAL.",
                    "These clauses are likely part of a Terms of Service or User Agreement document. The section sets out the"
                    + " limitations of liability, highlighting scenarios where the company would not be responsible for any"
                    + " losses or damages incurred by the user.",
                    "PLEASE NOTE THAT WE PROVIDE OUR PLATFORM FOR DOMESTIC AND PRIVATE USE. YOU AGREE NOT TO USE OUR"
                    + " PLATFORM FOR ANY COMMERCIAL OR BUSINESS PURPOSES, AND WE HAVE NO LIABILITY TO YOU FOR ANY LOSS"
                    + " OF PROFIT, LOSS OF BUSINESS, BUSINESS INTERRUPTION, OR LOSS OF BUSINESS OPPORTUNITY.",
                    "THESE LIMITATIONS OF LIABILITY APPLY REGARDLESS OF WHETHER WE KNEW OR SHOULD HAVE KNOWN OF THE"
                    + " POSSIBILITY OF ANY SUCH LOSSES ARISING.",
                    "YOU ARE RESPONSIBLE FOR ANY MOBILE SERVICE EXPENSES THAT MAY APPLY WHEN USING OUR SERVICES, INCLUDING"
                    + " TEXT MESSAGING AND DATA CHARGES. IF YOU ARE NOT SURE WHAT CHARGES APPLY, YOU SHOULD CONSULT YOUR"
                    + " SERVICE PROVIDER BEFORE USING THE SERVICE. TO THE EXTENT PERMITTED BY LAW, ANY DISPUTE YOU HAVE"
                    + " WITH A THIRD PARTY RESULTING FROM YOUR USE OF OUR SERVICES, INCLUDING, FOR EXAMPLE, ANY"
                    + " TELECOMMUNICATIONS CARRIER, COPYRIGHT HOLDER OR OTHER USERS, SHALL BE RESOLVED DIRECTLY BETWEEN"
                    + " YOU AND SUCH THIRD PARTIES, AND YOU HEREBY IRREVOCABLY RELEASE US AND OUR PARTNERS FROM ANY CLAIMS,"
                    + " DEMANDS, AND DAMAGES (ACTUAL AND CONSEQUENTIAL) OF ANY KIND AND NATURE, KNOWN AND UNKNOWN, ARISING"
                    + " OUT OF OR IN CONNECTION WITH SUCH DISPUTES.",
                    "This passage further outlines the limitations of liability in the agreement. It makes it clear that"
                    + " the platform is intended for personal use and not for commercial purposes, and the company is not"
                    + " liable for any loss related to business activities. Additionally, it mentions that users are"
                    + " responsible for any mobile service expenses. Lastly, it also clarifies that any dispute between"
                    + " the user and a third party should be resolved between them, and the user releases the company from"
                    + " any claims or damages associated with such disputes."
                ]
            },
            {
                id: "otherTerms",
                h3title: "Other Terms",
                text: [
                    "b. Open Source. The platform contains certain open source software. Each piece of open source software"
                    + " is subject to its own applicable license terms, which can be found in the Open Source Use Policy"
                    + " document.",
                    "c. Entire Agreement. This User Agreement (including any Additional Terms below) represents the legal"
                    + " agreement between you and TalkAboutAll and governs your use of the services, superseding any prior"
                    + " agreements between you and TalkAboutAll regarding our Services.",
                    "d. Links. You may link to our homepage, provided that you do this fairly and legally and do not"
                    + " damage our reputation or take advantage of it. You must not use links to our Services in a way"
                    + " that suggests any form of association with us or endorsement by us, if none exists. You must not"
                    + " post links to our Services on any website not owned by you. The website on which you place the link"
                    + " must comply in all respects with the content standards set out in the “Access and Use of Our"
                    + " Services” section above. We reserve the right to withdraw linking permission without notice.",
                    "e. Age Restrictions. Services are provided only to individuals who are 18 years old or older"
                    + " (with additional restrictions that may be set in the Additional Terms - For Specific Jurisdiction)."
                    + " By using the Services, you confirm that you are older than the age specified in this document. If"
                    + " we learn that someone younger than the age specified above is using the Services, we will terminate"
                    + " that user's account.",
                    "f. Waiver Clause. The failure to ensure compliance or enforce any provision of this User Agreement"
                    + " should not be interpreted as a waiver of such provision or right.",
                    "g. Security. We do not guarantee that our Services will be secure or free from errors or viruses."
                    + " You are responsible for configuring your information technology, computer programs, and platform"
                    + " to access our services. You should use your own antivirus software.",
                    "h. Severability. If any court with jurisdiction to decide on this matter determines that any provision"
                    + " of this User Agreement is invalid, that provision will be removed from the User Agreement without"
                    + " affecting the rest of the User Agreement, and the remaining provisions will remain valid and enforceable.",
                    "This section outlines additional terms concerning open-source software, the integrity of the agreement,"
                    + " linking to the service's homepage, age restrictions, waiver clause, security, and the severability"
                    + " of the terms in the user agreement."
                ]
            },
            {
                id: "additionalTerms",
                h3title: "Additional Terms",
                subTerms: [
                    {
                        id: "limitedUse",
                        titleOne: "Limited Use of Services",
                        text: [
                            "In addition to the restrictions stated in the User Agreement and Community Rules, the use"
                            + " of the Services is not permitted for:",
                            "1. criminal purposes;",
                            "2. disclosing state or other legally protected secrets;",
                            "3. distributing:",
                            "— extremist content (including materials that publicly justify terrorism or incite"
                            + " terrorist activities);",
                            "— materials promoting pornography;",
                            "— materials promoting violence and cruelty;",
                            "— materials containing obscenities;",
                            "— defamatory information (including discriminatory content, discrediting social groups"
                            + " based on gender, age, racial or national affiliation, language, religion, place of"
                            + " residence, occupation, or political views)."
                        ]
                    },
                    {
                        id: "forbiddenContent",
                        titleOne: "Other Prohibited Content",
                        text: [
                            "In addition to the restrictions stated in the User Agreement and Community Rules, you may"
                            + " not distribute content that violates the requirements set by Russian legislation (for"
                            + " example, information about methods of committing suicide and calls to commit suicide,"
                            + " information related to illegal gambling)."
                        ]
                    },
                    {
                        id: "rightsAndObligations",
                        titleOne: "Your Rights and Obligations",
                        text: [
                            "TalkAboutAll’s Rights and Obligations. Your rights and obligations concerning the use of"
                            + " services, as well as the rights and obligations of TalkAboutAll, are described in the"
                            + " User Agreement and Community Rules."
                        ]
                    },
                    {
                        id: "monitoring",
                        titleOne: "Content Monitoring",
                        text: [
                            "We comply with the requirements of Russian legislation on monitoring the social network"
                            + " in order to identify prohibited content and in the case of identifying such content, we"
                            + " may delete or restrict access to it if it is confirmed that the content is illegal."
                        ]
                    },
                    {
                        id: "complaints",
                        titleOne: "Complaints About Illegal Content",
                        text: [
                            "Any person can report content that, in their opinion, violates applicable law and/or the"
                            + " User Agreement, using this Form. We will review such a complaint and take the necessary"
                            + " measures if it is confirmed that the content is illegal."
                        ]
                    },
                    {
                        id: "deletionNotify",
                        titleOne: "Notifications of Content Removal",
                        text: [
                            "If we remove your content (restrict access to it) in accordance with the procedures described"
                            + " above, we will notify you of such removal (access restriction)."
                        ]
                    },
                    {
                        id: "appeal",
                        titleOne: "Appealing Actions to Remove Content",
                        text: [
                            "If you disagree with the removal of your content (restricted access to it), you can appeal"
                            + " such removal (access restriction) in the TalkAboutAll Application. We will review your"
                            + " request and notify you of our decision. If you disagree with our decision, you have the"
                            + " right to appeal the decision."
                        ]
                    },
                    {
                        id: "otherAppeals",
                        titleOne: "Other Inquiries",
                        text: [
                            "If you have any other complaints, requests, or questions, you can also contact us. We will"
                            + " do our best to review your requests as quickly as possible within the timeframes stipulated"
                            + " by the applicable law.",
                            "This section of the terms outlines the additional restrictions on the use of services,"
                            + " detailing prohibited content, monitoring, content removal, and the process for making"
                            + " complaints or appeals."
                        ]
                    }
                ]
            }
        ]
    }
}
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "next-i18next";

const RequestSuccess = () => {
  const { t } = useTranslation("landing");

  return (
    <div className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden  flex flex-col justify-center space-y-6 items-center">
      <div className="text-white text-4xl">{t("success")}</div>
      <div className="text-white text-xl w-3/4">
        {t("request-sent-successfully")}
      </div>
      <FontAwesomeIcon
        size="5x"
        icon={faCheckCircle}
        className="hover:opacity-50 text-green-500 m-2"
      />
    </div>
  );
};

export default RequestSuccess;

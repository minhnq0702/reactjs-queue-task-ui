import MessageTable from '@/components/blocks/MessageTable';
import CPagiLimitCtrl from '@/components/shared/PagiLimitCtrl';
import CPagiPageCtrl from '@/components/shared/PagiPageCtrl';
import { actions } from '@/models/slices/SliceMessage';
import { useAppDispath, useAppSelector } from '@/models/store';
import { TApi } from '@/models/TApi';
import { IMessage } from '@/models/TMessage';
import { useCallback, useEffect, useMemo, useState } from 'react';

const PAGE = 1;
const LIMIT = 20;

const PMessage = () => {
  const dispath = useAppDispath();
  const messages = useAppSelector((state) => state.message.messages);
  const [limit, setLimit] = useState(LIMIT);
  const [currentPage, setCurrentPage] = useState(PAGE);
  const [totalItem, setTotalItem] = useState(0);
  const [totalPage, setTotalPage] = useState(0);

  const fetchMsgs = useCallback((limit: number, page: number) => {
    void dispath(actions.LIST_MSG({ limit: limit, page: page })).then((res) => {
      const total = (res.payload as TApi<IMessage>).total ?? 0;
      setTotalItem(total);
      setTotalPage(Math.ceil(total / limit));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    fetchMsgs(limit, currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, limit]);

  const limitChange = useCallback((val: number) => {
    // * reset currentPage on limit change
    setCurrentPage(1);
    setLimit(val);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const _limitCtrl = useMemo(() => {
    return <CPagiLimitCtrl total={totalItem} limit={limit} onLimitChange={limitChange} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalItem]);

  const _pageCtrl = useMemo(() => {
    return <CPagiPageCtrl currentPage={currentPage} totalPage={totalPage} onPageChange={setCurrentPage} />;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, totalPage]);

  return (
    <>
      <MessageTable messages={messages} limitCtrl={_limitCtrl} pageCtrl={_pageCtrl} />
    </>
  );
};

export default PMessage;

(function () {
	
                var showMoreNChildren = function ($children, n) {
                    //��ʾĳjqueryԪ���µ�ǰn�����ص���Ԫ��
                    var $hiddenChildren = $children.filter(":hidden");
					
                    var cnt = $hiddenChildren.length;
                    for ( var i = 0; i < n && i < cnt ; i++) {
                        $hiddenChildren.eq(i).show();
                    }
                    return cnt-n;//���ػ�ʣ���������Ԫ�ص�����
                }
 
                //��ҳ�����е�class=showMorehandle��Ԫ�أ���֮�������ʾ�����������󶨵����Ϊ
                $(".showMoreNChildren").each(function () {
			
                    var pagesize = $(this).attr("pagesize") || 4;
                    var $children = $(this).children();
                    if ($children.length > pagesize) {
                        for (var i = pagesize; i < $children.length; i++) {
                            $children.eq(i).hide();
                        }
          
                        $(".showMorehandle").click(function () {
                            if (showMoreNChildren($children, pagesize) <= 0) {
                                //���Ŀ��Ԫ���Ѿ�û�����ص���Ԫ���ˣ������ء��������İ�ť����
                                $(this).hide();
                            };
                        });
                    }
                });
            })();